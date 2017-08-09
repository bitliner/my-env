
module.exports = function({path}) {
  let filename = path;

  if (!path) {
    filename = './ecosystem.config.js';
  }

  const envName = process.env.ENV;

  const config = require(filename);

  const env = config.apps[0]['env_' + envName];

  Object.assign(process.env, env);

}
