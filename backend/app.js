const { connect } = require('mongoose');

const { connect, disconnect } = require('./services/database.js'),
result = require('dotenv').config(),
express = require('express')();

if (result.error) {
  throw result.error
}

connect();
disconnect();
express.listen(process.env.APP_PORT);
