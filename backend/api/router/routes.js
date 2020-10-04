const routes = require('express').Router(),
menu = require('../services/menu');

routes.get('/getAll', (req, res) => {
  menu.getMenus().then((value) =>{
    res.json({ result: value });
  }, menu.onReject);
});

module.exports = { routes };