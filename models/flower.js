let client = require('../dbConnection');

let collection = client.db().collection('Flowers');

function postFlower(flower, callback) {
    collection.insertOne(flower,callback);
}

function getAllFlowers(callback) {
    collection.find({}).toArray(callback);
}

module.exports = {postFlower,getAllFlowers}