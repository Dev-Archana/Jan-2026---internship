const http = require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    fs.readFile("index.html",(err,data)=>{
        if(err){
            res.writeHead(500,{"content-type":"text/plain"});
            res.write("error : loading file");
            res.end();
            return;
        }
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(data);
        res.end();
    });
});
server.listen(5000,()=>{
    console.log("server running in the port 5000")
})
