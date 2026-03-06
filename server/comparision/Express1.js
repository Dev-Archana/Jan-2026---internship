const express=require("express")
// express application object 
// app will control the server and routes
const app=express()
// Create a route
// get => HTTP get request 
// it is used when the browser requests data from the servers 
// req => request from client 
// res=> Response sent to client 
app.get("/",(req,res)=>{
    res.send("Home Page");
});
app.get("/about",(req,res)=>{
    res.send("About Page");
});
app.listen(3000,()=>{
    console.log("Express API is port 3000")
})