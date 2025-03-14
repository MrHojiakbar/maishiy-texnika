const express = require('express');
const { serverPort } = require('./config/PORT');
const productRouter = require('./routes/products.route');
const { join } = require('node:path');

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("view engine","ejs")
app.set("views",join(process.cwd(),"src","views"))

app.use("/api/v1",productRouter)

const PORT = +serverPort || 5000;

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})