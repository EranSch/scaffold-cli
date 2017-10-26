const colors = require('colors');
const shell = require('shelljs');
const replace = require('replace-in-file');

const config = require('../config');

module.exports = (name, type) => {
  if (!name) return console.log(colors.red('you must specify a project name'));
  if (!type) return console.log(colors.red('you must specify a project type'));
  if (!shell.which('git')) return console.log(colors.red('you must have git installed'));
  switch(type) {
    case 'api':
      createAPI(name);
      break;
    case 'react':
      createReact(name);
      break;
    case 'react-native':
      createReactNative(name);
      break;
    case 'wordpress':
      createWordPress(name);
      break;
    default:
      console.log(colors.red('you must specify a valid project type'));
  }
};

createAPI = (name) => {
  console.log('creating api...');
  shell.exec(`git clone ${config.api_repo} ${name}`);
  console.log(colors.green('success!'));
};

createReact = (name) => {
  console.log('creating react...');
};

createReactNative = (name) => {
  console.log('creating react-native...');
};

createWordPress = (name) => {
  console.log('creating wordpress...');
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