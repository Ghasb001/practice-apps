require("dotenv").config();
const mongoose = require("mongoose");
const { Schema } = mongoose;


// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

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

let retrieve = (callback) => {

  Glossary.find({})
  .then((result => {
    callback(null, result)
  }))
  .catch((err => {
    console.log(err);
    callback(err);
  }))
}


module.exports.retrieve = retrieve;