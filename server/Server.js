const http=require("http");
const server=http.createServer((req,res)=>{
    res.write("Hello Students");
    res.end();
});
server.listen(3000,()=>{
    console.log("server running on port 3000");
});
/* 
http.createServer :creation of new server with the help of http req and res
req : request from browser
res : reponse to browser
listen() : start server
*/