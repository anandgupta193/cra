import chalk from "chalk";
import fs from "fs";
import ncp from "ncp";
import path from "path";
import { promisify } from "util";
import Spinner from "cli-spinners";
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
  } catch (err) {
    console.error(templateDir);
    process.exit(1);
  }
  console.log("Copy Project files");
  await copyTemplateFiles(options);
  console.log(Spinner.dots);
  console.log("%s Project ready", chalk.green.bold("DONE"));
  return true;
}
