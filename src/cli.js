import arg from 'arg';
import inquirer from 'inquirer';
import {createProject} from "./main.js";

function parseArgumentIntoOptions(rawArgs) {
    const args = arg(
        {
            '--git': Boolean,
            '--yes': Boolean,
            '--install' : Boolean,
            '-g': '--git',
            '-y': '--yes',
            '-i': '--install'
        },
        {
        argv: rawArgs.slice(2),
        }
    );
    return {
        skipPromts: args['--yes'] || false,
        git: args['--git'] || false,
        template: args._[0],
        runInstall : args['--install'] || false,
    };
}
async function promptMissingOptions(options) {
    const defaultTemplate = 'JavaScript';
    if(options.skipPromts) {
        return {
            ...options,
            template: options.template || defaultTemplate,
        };
    }
    const questions = [];
    if(!options.template) {
        questions.push({
            type: 'list',
            name: 'template',
            message: "Please choose which project template to use",
            choices:['javascript', 'typescript'],
            default: defaultTemplate,
        });
    }
    if(!options.git) {
        questions.push({
            type: 'confirm',
            name: 'git',
            message: 'Initialize a git repository',
            default: false,
        });
    }
    if(!options.runInstall) {
        questions.push({
            type: 'confirm',
            name: 'dependency',
            message: 'Install all dependency',
            default: false,
        });
    }
    const answers = await inquirer.prompt(questions);
    return {
        ...options,
        template: options.template || answers.template,
        git: options.git || answers.git,
        runInstall: options.runInstall || answers.dependency,
    };
}
export async function cli(args) {
    let options = parseArgumentIntoOptions(args);
    options = await promptMissingOptions(options);
    await createProject(options);
}