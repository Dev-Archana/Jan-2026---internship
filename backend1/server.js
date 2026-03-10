const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});