import chalk from "chalk";
import path from "path";
import execa from "execa";
import Listr from "listr";
const { execSync, exec } = require("child_process");

async function copyTemplateFiles(options) {
  try {
    return execSync("git clone https://github.com/anandgupta193/cra.git", {
      stdio: [0, 1, 2],
      cwd: path.resolve(options.targetDirectory, ""),
    });
  } catch (err) {
    console.log(chalk.red.bold("Error in Cloning"));
    process.exit(1);
  }
}
async function initGit(options) {
  try {
    const result = await execa("git", ["init"], {
      stdio: [0, 1, 2],
      cwd: options.targetDirectory,
    });
  } catch (err) {
    console.log(chalk.red.bold("Failed to initialize Git"));
    process.exit(1);
  }
  return;
}
async function installnpm(options) {
  try {
    const result = await execa("npm", ["install"], {
      stdio: [0, 1, 2],
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
      task: () => installnpm(options),
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
