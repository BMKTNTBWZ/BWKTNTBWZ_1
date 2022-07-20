const express = require('express');
const app = express();
const router = require("./router")
const bodyParser = require("body-parser");
const cors = require("cors");

// 解决跨域
app.use(cors())

app.use(bodyParser.urlencoded({
    extended:true
}));


app.use('/api',router)
app.listen(3000,()=>{
    console.log("服务器运行在3000端口上");
})