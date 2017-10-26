const colors = require('colors');
const shell = require('shelljs');

const config = require('../config');

module.exports = (name) => {
  console.log('creating api...');
  shell.exec(`git clone ${config.api_repo} ${name}`);
  console.log(colors.green('success!'));
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