console.log("Hello World")
/* is javascript runtime 
runs javascript files outside the browser
built on chrome v8 engine
used to create backend
single threaded concept -> event looping 
*/
// FileSystem , http , path ,os ,events => built-in modules
// practice programs : read a file , write a file , appending , create http req and res 

const fs=require("fs");
// syntax : writeFile("filename","data","callback")
// fs.writeFile("test.txt","Hi Interns",(err)=>{
//     if(err){
//         console.log("Error:",err)
//     }else {
//         console.log("file created successfully")
//     }
// });
// fs.appendFile("test1.txt","extra file Internship Batch 2026 ",(err)=>{
//     if(err){
//         console.log("Error",err)
//     }else{
//         console.log("CReated and appended")
//     }
// });
fs.writeFileSync("test2.csv","write and sync1")
console.log("sync")
/*
writeFile()   writeFileSync()
Asynchronous    Synchonous
non-blocking    blocking 
uses Callback   no callbacks 
*/


// readFile(path , encoding , callback)
// fs.readFile("test.txt","utf-8",(err,data)=>{
// if(err){
//     console.log("Error",err)
// }else{
//     console.log(data)
// }
// });
