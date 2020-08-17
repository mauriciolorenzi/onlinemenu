export function mongodb()
{
    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://user:<password>@cluster0-ceewv.mongodb.net/<dbname>?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("test").collection("devices");

        client.close();
    });
}