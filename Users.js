const mongoose = require('mongoose')
const express = require('express')

const app = express()
app.use(express.json())
var obj = require('Sample_User.json');


const users = mongoose.model('users', UserSchema)

mongoose.connect('mongodb+srv://admin:123@exercises.tdmvy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
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



app.listen(8081, () => { console.log('Server is running...') });
