require("dotenv").config();
const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect('mongodb+srv://Ghasb001:HACKReactorRPP2209!@cluster0.jkoecfm.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log('db connected')
})
.catch((err) => {
  console.log('Error', err)
})

let glossarySchema = new mongoose.Schema({
  word: String,
  definition: String,
});

let glossary = mongoose.model('glossary', glossarySchema);

// let save = (glossaries, callback) => {

//   glossary.insertMany(glossaries)
//     .then((data) => {
//       console.log('Saved successfully')
//       callback(data);
//   })
//   .catch((err) => {
//     console.log('Cannot save', err);
//   })

// }

let retrieve = (callback) => {
  glossary.find()
  .then((data) => {
    console.log(data);
  })
  // glossary.find()
  // .then((data) => {
  //   console.log(data);
  // })
}

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
module.exports.retrieve = retrieve;