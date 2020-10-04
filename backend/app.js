const express = require('express'),
app = express(),
port = process.env.PORT || 3000,
router = require('./api/router/routes');

if (app.get('env') == 'development') {
  const result = require('dotenv').config();

  if (result.error) {
    throw result.error
  }
}
app.use('/', router.routes);

app.listen(port);