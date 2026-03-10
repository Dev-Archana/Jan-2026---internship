const express=require("express")
const app=express()

// middleware to read json 
app.use(express.json());

// temporary database
let users=[];

// create an api to post the data 
app.post("/api/users",(req,res)=>{
    const {username,email,password}=req.body;
    // validation :
    if(!username || !email || !password){
        return res.status(400).json({
            message:"All Fields Are Required"
        });
    }
    const newUser={
        id:users.length+1,
        username,
        email,
        password
    };
    users.push(newUser);
    res.status(200).json({
        message:"User Created Successfully",
        user:newUser
    });
});
// get all user
app.get("/api/users",(req,res)=>{
    res.json(users)
})
// GET single user
// app.get("/api/users/:id",(req,res)=>{
//     const id=parseInt(req.params.id);
//     const user=users.find(user=>user.id===id);
//     if(!user){
//         return res.status(404).json({
//             message:"user not found"
//         });
//     }
//     res.json(user);
// });

app.listen(3000,()=>{
    console.log("server is running ")
})
