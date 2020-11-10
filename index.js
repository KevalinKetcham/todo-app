const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const password = 'Quetwaq`123';
const url = `mongodb+srv://kevalin:${password}@cluster0.ykbkz.mongodb.net/todoApp?retryWrites=true&w=majority`;
const assert = require('assert');

const PORT = 3000
const cors = require('cors');
const { write } = require('fs');
const { send } = require('process');
const { response } = require('express');
const { read } = require('fs/promises');
app.use(cors());
app.use(require("body-parser").json());

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected to database");
    const collection = client.db("todoApp").collection('todos');

    // Create todo
    app.post("/", (req, res) => {
        console.log("POST invoked");
        collection.insertOne({
            ...req.body
        }).then((res) => {
            console.log(`Todo inserted: ${res}`);
        });
    });

    // Read todos
    app.get("/", async (req, res) => {
        console.log("GET invoked");

        let todos = [];

        await collection.find({}).forEach(doc => {
            todos.push(doc);
        });

        res.send(todos);
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

    console.log("Command successful.")

    const listen = app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}`);
    });
});
