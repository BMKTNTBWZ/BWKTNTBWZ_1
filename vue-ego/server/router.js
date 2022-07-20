const express = require('express');
const router = express.Router();
const sqlFn = require("./mysql")

router.post('/login',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    // 查询SQL语句
    const sql = "select * from user where username=? and password=?"
    const arr = [username,password];
    sqlFn(sql,arr,result=>{
        if(result.length>0){
            res.send({
                status:200,
                result
            })
        }else{
            res.send({
                status:400,
                msg:"用户名密码错误"
            })
        }
    })
})




module.exports = router