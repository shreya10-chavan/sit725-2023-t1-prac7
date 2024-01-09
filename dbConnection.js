const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Akash:Akash@cluster0.ps0k4r6.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

client.connect();

module.exports = client;