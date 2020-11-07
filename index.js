const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const url = `mongodb+srv://kevalin:${password}@cluster0.ykbkz.mongodb.net/todos?retryWrites=true&w=majority`;
const password = 'Quetwaq`123';
const assert = require('assert');

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected to database");
    const db = client.db("todos");
    
    // Create todo
    db.collection('todos').insertOne({
            todo: 'Poke cow'
        }).then((result) => {
            console.log(`Todo inserted: ${result}`);
    });

    // Read todos
    app.get("/", (req, res) => {
        const readValues = db.collection('todos').find({});

        function displayValues(doc) {
            console.log(JSON.stringify(doc, null, 4));
        };

        function readErr(error) {
            console.log(error);
        };

        readValues.forEach(displayValues, readErr);
    });

    // Update todo
    db.collection('todos').updateOne(
        { todo: 'Poke cow' },
        { $set: { todo: 'Pat cow' } }
    ).then((result) => {
        console.log(`Updated todo: ${result}`);
    });

    // Delete todo
    db.collection('todos').deleteOne({
        todo: "Poke cow"
    }).then((result) => {
        console.log(`Deleted todo: ${result}`)
    });

    console.log(`Command successful. DB: ${db}`)
    client.close();
});

module.exports = Index;