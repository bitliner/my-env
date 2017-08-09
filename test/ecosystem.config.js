


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
      env_development: {
        SECRET: 'secret',
        MONGO_DB: 'MONGO_DB_development',
      },
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
