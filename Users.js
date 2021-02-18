const mongoose = require('mongoose')
const express = require('express')

const app = express()
app.use(express.json())
var obj = require('Sample_User.json');

const url = process.env.MONGODB_URL;

//Connect to mongoDB Atlas
const connect = mongoose.connect(url, 
{ 
      useNewUrlParser: true,
      useUnifiedTopology: true
});

connect.then((db) => {
      console.log('Connected correctly to server!');
}, (err) => {
      console.log(err);
});

const UserSchema = new mongoose.Schema({
  name: { type: [String], required: true },
  username: { type: String, required: true, minlength: 4 },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: String,

    validate: function (value) {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
      return emailRegex.test(value)
    },
  },
  address: {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: {
      lat: String,
      lng: String,
    },
  },
  phone: String,
  website: ['htm', 'html'],
  company: {
    name: String,
    catchPhrase: String,
    bs: String,
  },
})

const users = mongoose.model('users', UserSchema)
module.exports = users

mongoose.connect(
  'mongodb+srv://elvin:Toronto2016@cluster0.pqxvh.mongodb.net/myFirstDatabase'
)

app.listen({ port: process.env.PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`));
