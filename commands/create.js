const colors = require('colors');
const shell = require('shelljs');
const { keys } = require('lodash');

const handlers = require('../handlers');
const prompt = require('../helpers/prompt');

module.exports = async (name, type) => {
  // Prompt for name if not provided
  if (!name) name = await prompt('What is the name of your project?');

  // Prompt for project type if not provided or invalid, allow selection from supported handlers
  if (!type) type = await prompt('Which type of project would you like to create?', keys(handlers));
  if (!handlers[type]) type = await prompt('Invalid project type specific, please select from list below:', keys(handlers));

  // Exit out if git not found
  if (!shell.which('git')) return console.log(colors.red('you must have git installed'));

  handlers[type](name);
};
