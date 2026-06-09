const express = require('express');
const app = express();

app.use("/" , ( req , res , next)=>{
    console.log("request handler")
    // res.send("handling the route")
    next();
},(req , res ,next)=>{
    console.log("request handler 2")
    // res.send("handling the route 2")
    next();
},(req , res)=>{
    console.log("request handler 3")
    res.send("handling the route 3")
},(req , res)=>{
    console.log("request handler 4")
    res.send("handling the route 4")
})






app.listen(8268 , ()=>{
    console.log("server is listing on port 8268")
})