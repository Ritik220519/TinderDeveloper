const express = require('express');
const app = express();

app.use("/" , ( req , res)=>{
    res.send("boom shakla k a")
})
app.use("/test" , ( req , res)=>{
    res.send("here is first express server....")
})
app.use("/check" , ( req , res)=>{
    res.send("here is second express route....")
})





app.listen(8268 , ()=>{
    console.log("server is listing on port 8268")
})