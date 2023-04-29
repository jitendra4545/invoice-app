const express=require('express')
const app=express()
require('dotenv').config()


app.get("/",(req,res)=>{
    res.send(`welcome back`)
})



app.listen(process.env.port,()=>{
    console.log(`server running on port ${process.env.port}`)
})