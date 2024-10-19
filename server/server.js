import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'

// App Config 
const PORT =process.env.PORT || 4000
const app=express()
await connectDB()
// Intialize middlewares
app.use(express.json())
app.use(cors())
 
// ApI routes

app.get('/',(req,res)=> res.send("API Working"))

app.listen(PORT,()=>{
    console.log("server Running on port number"+PORT)
})