const express = require("express");
const app = express();
const { connectDB } = require("./config/database");

const User = require("./models/user");


app.use(express.json());

app.post("/signup", async (req, res) => {
  const {firstName , lastName , emailId , password , age} = req.body;
 
  console.log(req.body);
  try {
    const user = new User({
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
      password: password,
      age: age
    });
    await user.save();
    res.send("User created successfully");
  } catch (error) {
    res.status(400).send("Error in saving the user :", error.message);
  }
});

app.get("/feed" , async (req,res)=>{
  try{  
    const user = await User.find({});
    console.log(user)
    res.send(user);

  }catch(err){
    res.status(400).send("Error in fetching the user :", err.message);
  }
})

app.get("/getUser" , async (req,res)=>{
  const emailId = req.body.emailId;
  try{  
    const user = await User.findOne({emailId : emailId});
    console.log(user)  
    if(!user){
      res.status(404).send("User not found");
    }else{
        res.send(user);

    }
  

  }catch(err){
    res.status(400).send("Error in fetching the user :", err.message);
  }
})

app.delete("/deleteUser" , async (req , res)=>{
  // const emailId = req.body.emailId;
  const userId = req.body.userId

  try {
    // const user = await User.deleteOne({emailId : emailId})
    const user = await User.findByIdAndDelete(userId);
    res.send("User deleted successfully");
  } catch (error) {
    res.status(400).send("Error in deleting the user :", error.message);
    
  }
})








connectDB()
  .then(() => {
    console.log("Database connection established..");
    app.listen(8268, () => {
      console.log("server is listing on port 8268");
    });
  })
  .catch((err) => {
    console.error("database connection failed :", err.message);
  });
