import chalk from "chalk";
import fs from "fs";
import path from "path";
import { promisify } from "util";
import execa from "execa";
import Listr from "listr";
const { execSync, exec } = require("child_process");
const access = promisify(fs.access);

async function copyTemplateFiles(options) {
  try {
    return execSync("git clone https://github.com/shubhamsWEB/cra.git", {
      stdio: [0, 1, 2], // we need this so node will print the command output
      cwd: path.resolve(options.targetDirectory, ""), // path to where you want to save the file
    });
  } catch (err) {
    console.log(chalk.red.bold("Error in Cloning"));
    process.exit(1);
  }
}
async function initGit(options) {
  try {
    const result = await execa("git", ["init"], {
      stdio: [0, 1, 2], // we need this so node will print the command output
      cwd: options.targetDirectory,
    });
  } catch (err) {
    console.log(chalk.red.bold("Failed to initialize Git"));
    process.exit(1);
  }
  return;
}
async function npminstall(options) {
  try {
    const result = await execa("npm", ["install"], {
      stdio: [0, 1, 2], // we need this so node will print the command output
      cwd: `${options.targetDirectory}/cra`,
    });
  } catch (err) {
    console.log(chalk.red.bold("Error in Installing dependences"));
    process.exit(1);
  }
  return;
}
export async function createProject(options) {
  options = {
    ...options,
    targetDirectory: options.targetDirectory || process.cwd(),
  };
  // const templateDir = path.resolve(
  //   new URL(__dirname).pathname,
  //   "../templates",

  //   options.template.toLowerCase()
  // );
  // options.templateDirectory = templateDir;
  // try {
  //   await access(options.templateDirectory, fs.constants.R_OK);
  // } catch (err) {
  //   process.exit(1);
  // }
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
      task: () => npminstall(options),
      enabled: () => options.runInstall,
      skip: () =>
        !options.runInstall
          ? "Enter --install to automaticaly install dependencies"
          : undefined,
    },
  ]);
  await tasks.run();
  console.log("%s Project ready", chalk.green.bold("DONE"));
  return true;
}
