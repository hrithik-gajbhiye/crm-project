import express from "express"
import cors from "cors"
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import authRoutes from "./routes/auth.route.js"



dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(()=>{
  console.log("DATA BASE CONNECTED");
  
}).catch((err)=>{
  console.log(err);
  
})

const app = express()

// middleware to handle cors

app.use(
  cors({
    origin:process.env.FRONT_END_URL ||  "http://localhost:5173",
    methods:["GET" , "POST" , "PUT" , "DELETE"],
    allowedHeaders:["Content-Type","Authorization"],
  })
)

// middleware to handle JSON object in req body
app.use(express.json())


app.listen(3000,()=>{
  console.log("server is running on port 3000!");
  
})

app.use("/api/auth",authRoutes)

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500

  const message = err.message || "Internal Server Error"

  res.status(statusCode).json({
    success:false,
    statusCode,
    message,
  })
})

