const mongoose = require("mongoose");

const userScheema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
    age: {
    type: Number,
  },
});
module.exports =  mongoose.model("User" , userScheema);
