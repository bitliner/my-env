const envName = process.env.ENV;

const config = require('./ecosystem.config.js');

const env = config.apps[0]['env_' + envName];

Object.assign(process.env, env);