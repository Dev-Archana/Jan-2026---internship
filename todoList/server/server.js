const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const connectDB=require('./config/db');

dotenv.config();
const app=express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth",require('./routes/authRoutes'));
app.use("/api/todos",require('./routes/todoRoutes'));

app.listen(5000,()=>
    console.log("Server running on port 5000")
);
