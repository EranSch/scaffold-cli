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
      createAPI();
      break;
    case 'react':
      createReact();
      break;
    case 'react-native':
      createReactNative();
      break;
    case 'wordpress':
      createWordPress();
      break;
    default:
      console.log(colors.red('you must specify a valid project type'));
  }
};

createAPI = () => {
  console.log('creating api...');
  shell.exec(`git clone ${config.api_repo} --quiet`);
  console.log(colors.green('success!'));
};

createReact = () => {
  console.log('creating react...');
};

createReactNative = () => {
  console.log('creating react-native...');
};

createWordPress = () => {
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