const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname,"projeHtml")));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"projeHtml","index.html"));
});

app.get("/hello",(req,res)=>{
    res.sendFile(path.join(__dirname,"projeHtml","hello.html"));
});

app.get("/hi",(req,res)=>{
    res.sendFile(path.join(__dirname,"projeHtml","hi.html"));
});

app.listen(3000, ()=>{
    console.log('server is running on port 3000');
});