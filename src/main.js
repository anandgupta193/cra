import chalk from "chalk";
import fs from "fs";
import ncp from "ncp";
import path from "path";
import { promisify } from "util";
const ora = require('ora');
const spinner = new ora({
text: `${chalk.green('Loading Files')}`,
spinner: 'dots'
});
const access = promisify(fs.access);
const copy = promisify(ncp);

async function copyTemplateFiles(options) {
  return copy(options.templateDirectory, options.targetDirectory, {
    clobber: false,
  });
}
export async function createProject(options) {
  options = {
    ...options,
    targetDirectory: options.targetDirectory || process.cwd(),
  };
  const templateDir = path.resolve(
    new URL(__dirname).pathname,
    '../templates',

    options.template.toLowerCase(),
  );
  options.templateDirectory = templateDir;
  try {
    await access(options.templateDirectory, fs.constants.R_OK);
    spinner.start("Copying Project files");
  } catch (err) {
    spinner.fail(err);
    process.exit(1);
  }
  await copyTemplateFiles(options);
  spinner.succeed("Done");
  console.log("%s Project ready", chalk.green.bold("DONE"));
  return true;
}
