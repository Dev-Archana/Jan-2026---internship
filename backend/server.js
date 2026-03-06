const express=require("express");
const path=require("path");
const app=express();

// Home Route
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});
// start the server
app.listen(3000,(req,res)=>{
    console.log("Server Running")
})