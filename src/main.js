import chalk from "chalk";
import fs from "fs";
import ncp from "ncp";
import path from "path";
import { promisify } from "util";
import execa from "execa";
import Listr from "listr";
import { projectInstall } from "pkg-install";
const ora = require("ora");
const spinner = new ora({
  text: `${chalk.green("Loading Files")}`,
  spinner: "dots",
});
const access = promisify(fs.access);
const copy = promisify(ncp);

async function copyTemplateFiles(options) {
  return copy(options.templateDirectory, options.targetDirectory, {
    clobber: false,
  });
}
async function initGit(options) {
  const result = await execa("git", ['init'], {
    cwd: options.targetDirectory,
  });
  if (result.failed) {
    return Promise.reject(new Error("Failed to initialize Git"));
  }
  return;
}
export async function createProject(options) {
  options = {
    ...options,
    targetDirectory: options.targetDirectory || process.cwd(),
  };
  const templateDir = path.resolve(
    new URL(__dirname).pathname,
    "../templates",

    options.template.toLowerCase()
  );
  options.templateDirectory = templateDir;
  try {
    await access(options.templateDirectory, fs.constants.R_OK);
    spinner.start("Copying Project files");
  } catch (err) {
    spinner.fail(err);
    process.exit(1);
  }
  const tasks = new Listr([
    {
      title: "Copying project files",
      task: () => copyTemplateFiles(options),
    },
    {
      title: "Initializing git",
      task: () => initGit(options),
      enabled: () => options.git,
    },
    {
      title: "Installing Dependencies",
      task: () =>
        projectInstall({
          cwd: options.targetDirectory,
        }),
      skip: () =>
        !options.runInstall
          ? "Enter --install to automaticall install dependencies"
          : undefined,
    },
  ]);
  await tasks.run();
  spinner.succeed("Done");
  console.log("%s Project ready", chalk.green.bold("DONE"));
  return true;
}
