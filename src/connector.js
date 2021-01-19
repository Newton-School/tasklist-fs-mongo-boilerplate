const mongodb = require('mongodb');
const mongoose = require('mongoose');
let {todoSchema} = require('./schema');

const uri = ""; 

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true ,useCreateIndex: true })
.then(console.log("Success"))

let collection_connection = mongoose.model('todo', todoSchema);
exports.todo = collection_connection;