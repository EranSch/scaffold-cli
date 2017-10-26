const inquirer = require('inquirer');
const { get, uniqueId } = require('lodash/fp');

/**
 * Simple async wrapper for inquirer, to prompt user
 * @async
 * @param {string} question - Question displayed to user
 * @param {string[]} [choices=[]] - Predefined answers (optional)
 * @return {Promise.<string>} - Answer entered or selected by user
 *
 * @example
 * // Displays question, allows freeform entry
 * prompt('What is your name');
 * @example
 * // Provides three options for user to select from
 * prompt('What is your favorite color?', ['red', 'white', 'blue']);
 * @example
 * // Use with `await` for streamlines inquiries
 * if (!name) name = await prompt('What is the name of your project?');
 */
module.exports = (question, choices = []) => {
  const questionId = uniqueId('prompt_');
  return inquirer.prompt({
    type: choices.length ? 'list' : 'input',
    name: questionId,
    message: question,
    choices,
  }).then(get(questionId));
};