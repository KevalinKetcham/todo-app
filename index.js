const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const password = 'Quetwaq`123';
const url = `mongodb+srv://kevalin:${password}@cluster0.ykbkz.mongodb.net/todos?retryWrites=true&w=majority`;
const assert = require('assert');

const PORT = 3000
const cors = require('cors');
const { write } = require('fs');
const { send } = require('process');
app.use(cors());

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected to database");
    const db = client.db("todos");
    
    // Create todo
    app.post("/", (req, res) => {
        console.log("POST invoked")
        // db.collection('todos').insertOne({
        //         todo: 'Poke cow'
        //     }).then((result) => {
        //         console.log(`Todo inserted: ${result}`);
        // });
    });

    // Read todos
    app.get("/", (req,res) => {
        res.sendFile(__dirname+'/index.html');
        console.log("GET invoked")
        // const readValues = db.collection('todos').find({});

        // function displayValues(doc) {
        //     console.log(JSON.stringify(doc, null, 4));
        // };
    
        // function readErr(error) {
        //     console.log(error);
        // };

        // readValues.forEach(displayValues, readErr);    
    });
    
    // Update todo
    app.put("/", (req, res) => {
        console.log("PUT invoked")
        // db.collection('todos').updateOne(
        //     { todo: 'Poke cow' },
        //     { $set: { todo: 'Pat cow' } }
        // ).then((result) => {
        //     console.log(`Updated todo: ${result}`);
        // });
    });

    // Delete todo
    app.delete("/", (req, res) => {
        console.log("DELETE invoked")
        // db.collection('todos').deleteOne({
        //     todo: "Poke cow"
        // }).then((result) => {
        //     console.log(`Deleted todo: ${result}`)
        // });
    });

    console.log(`Command successful. DB: ${db}`)
    client.close();

    const listen = app.listen(PORT, () => {
        console.log(`Your app is listening on port ${PORT}`);
    });
});
