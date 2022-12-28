require("dotenv").config();
const mongoose = require("mongoose");
const { Schema } = mongoose;
//const words = require('./glossary.mongodb');

mongoose.connect('mongodb+srv://Ghasb001:HACKReactorRPP2209!@cluster0.jkoecfm.mongodb.net/glossary?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log('db connected')
})
.catch((err) => {
  console.log('Error', err)
})

let glossarySchema = mongoose.Schema({
  word: String,
  definition: String,
});

let Glossary = mongoose.model('Glossary', glossarySchema);

let retrieve = () => {

  Glossary.find({})
  .then((result => {
    console.log('RESULT', result)
  }))

}

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
module.exports.retrieve = retrieve;