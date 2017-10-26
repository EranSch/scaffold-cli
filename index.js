//#!/usr/bin/env node

const program = require('commander');
const colors = require('colors');

const commands = require('./commands');

program
  .version('0.1.0');

program
  .command('create [name]')
  .description('Create an app with the given name')
  .option('-t, --type [project type]', 'Project Type (ex. api, wordpress, react, react-native)')
  .action((name, options) => {
    commands.create(name, options.type);
  });


program.parse(process.argv);