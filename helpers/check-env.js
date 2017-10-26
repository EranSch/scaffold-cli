const check = require('check-node-version');

const requirements = {
  node: '8',
  yarn: '1.2',
};

check(requirements, function(err, result) {
  if (err) throw err;
  console.log('Node version is sufficient?', result.node.isSatisfied);
  console.log('Yarn version is sufficient?', result.yarn.isSatisfied);
});