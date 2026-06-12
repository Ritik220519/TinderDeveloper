const express = require('express');
const app = express();
const {connectDB} = require("./config/database")

connectDB().then(()=>{
    console.log("Database connection established..");
    app.listen(8268 , ()=>{
    console.log("server is listing on port 8268")
})
}).catch((err)=>{
    console.error("database connection failed :", err.message);
})


