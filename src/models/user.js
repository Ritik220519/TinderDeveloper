const mongoose = require("mongoose");

const userScheema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength : 4,
    maxlength : 25
  },
  lastName: {
    type: String,
    minlength : 4,
    maxlength : 25
  },
  emailId: {
    type: String,
    required: true,
    unique : true,
    lowercase : true,
    trim : true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    validate(value){
      if(value !== "male" && value !== "female" && value !== "others"){
        throw new Error("Gender data is not valid");
    }
  }
  },
  age: {
    type: Number,
    min : 18,
    max : 60,
  },
  photoUrl: {
    type: String,
    default : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },
  about: {
    type: String,
  },
  skills: {
    type: [String],
   
  },
  about: {
    type: String,
    default: "Hey there! I am using this app.",
  },
} , {timestamps : true});
module.exports = mongoose.model("User", userScheema);
