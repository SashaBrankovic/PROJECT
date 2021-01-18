const express=require('express');
const mongojs=require('mongojs');
const app=express();

app.set("view engine", "ejs")

app.get("/",(req,res)=>{
   res.send("OK")
})

app.listen(3000,()=>{
   console.log('Starting...');
})