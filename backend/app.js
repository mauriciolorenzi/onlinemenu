const result = require('dotenv').config(),
express = require('express')();

if (result.error) {
  throw result.error
}

express.listen(process.env.APP_PORT);
