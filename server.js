const express = require('express');
const { serverPort } = require('./src/config/PORT');

const app=express()


const PORT = serverPort || 5000;

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})