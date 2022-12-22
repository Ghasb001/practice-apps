require("dotenv").config();
const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect('mongodb+srv://Ghasb001:DEADspace!1991@cluster0.4ygl3zq.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log('db connected')
})
.catch((err) => {
  console.log('Error', err)
})

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
