const database = require('../dao/database');

async function getMenus()
{
    return database.getAll('menus');
}

function onReject(reason)
{
    console.log(reason);
}


module.exports = { getMenus, onReject };