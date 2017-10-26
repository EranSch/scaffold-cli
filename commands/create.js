const colors = require('colors');
const shell = require('shelljs');
const replace = require('replace-in-file');
module.exports = (name, type) => {
  if (!name) return console.log(colors.red('you must specify a project name'));
  if (!type) return console.log(colors.red('you must specify a project type'));
  if (!shell.which('git')) return console.log(colors.red('you must have git installed'));
  console.log(name, type);
};

/*


const options = {
  files: ['directory/!**!/!*.js'],
  from: /{{app-name}}/g,
  to: 'Rich',
};

replace(options)
  .then(changedFiles => {
    console.log('Modified files:', changedFiles.join(', '));
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });*/