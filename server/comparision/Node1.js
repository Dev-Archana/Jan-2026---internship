const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("Home")
    }
    else if(req.url==='/about')
    {
        res.write("About")
    }
    res.end();
});
server.listen(3000,()=>{
    console.log("server running")
});