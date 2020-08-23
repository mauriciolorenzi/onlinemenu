const MongoClient = require('mongodb').MongoClient;

function connect() {
    const uri = process.env.MONGO_URL
        .replace(process.env.MONGO_USERNAME_TAG, process.env.MONGO_USERNAME)
        .replace(process.env.MONGO_PASSWORD_TAG, process.env.MONGO_PASSWORD)
        .replace(process.env.MONGO_DATABASE_TAG, process.env.MONGO_DATABASE);
    return new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }).connect();
}

function disconnect(client)
{
    client.close();
}

function getAll(client, database, collection)
{
    client.db(database).collection(collection).find({}).toArray((err, result) => {
        if (!err) {
            return result;
        }
        else {
            console.err(err);
        }
    });
}

function getWithFilter(client, database, collection, filter)
{
    client.db(database).collection(collection).find(filter).toArray((err, result) => {
        if (!err) {
            return result;
        }
        else {
            console.err(err);
        }
    });
}

function insert(client, database, collection, data)
{

}

function update(client, database, collection, data)
{
}

function remove(client, database, collection, data)
{
}

module.exports = { connect, disconnect };