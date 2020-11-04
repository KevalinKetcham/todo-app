<script>
    // Create todo: sends a new todo key value pair to the DB
    // Read todos: requests and displays all the DB todos
    // Update todo: edits a DB todo
    // Delete todo: removes a DB todo
</script>

// MongoDB Driver Code
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://kevalin:<password>@cluster0.ykbkz.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });