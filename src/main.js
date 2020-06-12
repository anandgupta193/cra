import chalk from "chalk";
import fs from "fs";
import ncp from "ncp";
import path from "path";
import { promisify } from "util";
import execa from "execa";
import Listr from "listr";
import { projectInstall } from "pkg-install";
const access = promisify(fs.access);
const copy = promisify(ncp);
var Git = require("nodegit");
async function copyTemplateFiles(options) {
  // return copy(options.templateDirectory, options.targetDirectory, {
  //   clobber: false,
  return Git.Clone("https://github.com/shubhamsWEB/cra.git", options.targetDirectory).then(function(repository) {
  console.log("Done cloning");
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
  } catch (err) {
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
  console.log("%s Project ready", chalk.green.bold("DONE"));
  return true;
}
