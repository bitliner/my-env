# my-env
Set process.env according to ecosystem.config.js file (PM2)

## Usage



Run

`ENV=production node index.js`

where

```
// index.js

const MyEnv = require('my-env');
const filename=require('path').resolve(__dirname,'ecosystem.config.js')

MyEnv({ path: filename});

```

and

```
// ecosystem.config.js


```

OR check file `test/index.spec.js` and `package.json` test script.
