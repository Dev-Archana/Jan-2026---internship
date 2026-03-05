const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url === "/"){
        res.write("Welcome To Landing Page")
    }
    else if(req.url === '/about'){
        res.write("this is about page");
    }
    else{
        res.write("404 not found");
    }
    res.end();
});
server.listen(5000,()=>{
    console.log("server running in the port 5000")
})
