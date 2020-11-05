const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const db = client.db("test");
// Connection URL
const url = 'mongodb+srv://kevalin:<password>@cluster0.ykbkz.mongodb.net/<dbname>?retryWrites=true&w=majority';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  client.close();
});

db.collection('todos').insertOne({
    todo: 'Pet cow',
  }).then((result) => {
    console.log(`Todo inserted: ${result}`);
})

// Create todo: sends a new todo key value pair to the DB
// Read todos: requests and displays all the DB todos
// Update todo: edits a DB todo
// Delete todo: removes a DB todo

// MongoDB Driver Code

// Long version
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://kevalin:<password>@cluster0.ykbkz.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// Short version
// mongodb+srv://kevalin:<password>@cluster0.ykbkz.mongodb.net/<dbname>?retryWrites=true&w=majority