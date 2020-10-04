const { MongoClient } = require('mongodb');

function connect() {
    const uri = process.env.MONGO_URL
        .replace(process.env.MONGO_USERNAME_TAG, process.env.MONGO_USERNAME)
        .replace(process.env.MONGO_PASSWORD_TAG, process.env.MONGO_PASSWORD)
        .replace(process.env.MONGO_DATABASE_TAG, process.env.MONGO_DATABASE);
    return MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }).connect();
}

/* function disconnect(client)
{
    client.close();
}
 */

async function getAll(collection)
{
    let client = await connect();
    return client.db(process.env.MONGO_DATABASE).collection(collection).find({}).toArray();
}

async function getWithFilter(collection, filter)
{
    let client = await connect();
    return client.db(process.env.MONGO_DATABASE).collection(collection).find(filter).toArray();
}

async function insert(collection, object)
{
    let client = await connect();
    client.db(process.env.MONGO_DATABASE).collection(collection).insertOne(object)
}

async function update(collection, filter, update)
{
    let client = await connect();
    client.db(process.env.MONGO_DATABASE).collection(collection).updateMany(filter, update);
}

async function remove(collection, query)
{
    let client = await connect();
    client.db(process.env.MONGO_DATABASE).collection(collection).deleteMany(query);
}

module.exports = { getAll, getWithFilter, insert, update, remove };