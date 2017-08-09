# my-env
Set process.env according to ecosystem.config.js file ([PM2](http://pm2.keymetrics.io/docs/usage/deployment/))

## Usage



Run

`ENV=production node index.js`

where

```
// index.js

const MyEnv = require('my-env');
const filename=require('path').resolve(__dirname,'ecosystem.config.js')

MyEnv({ path: filename});

// now process.env.MONGO_DB is MONGO_DB_production according to ecosystem.config.js

```

and

```
// ecosystem.config.js

module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: 'my-end',
      script: 'dist/index.js',
      instances: 4,
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production: {
        SECRET: 'secret',
        MONGO_DB: 'MONGO_DB_production',
      },
      env_stage: {
        SECRET: 'secret',
        MONGO_DB: 'MONGO_DB_stage',
      },
      // ...
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    // ...
  },
}

```

OR check file `test/index.spec.js` and `package.json` `test` script.
