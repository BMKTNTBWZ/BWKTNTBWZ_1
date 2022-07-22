const express = require("express");
const router = express.Router();
const sqlFn = require("./mysql");
const jwt = require("jsonwebtoken");
const jwtsecret = require("./jwtsecret");
const bodyParser = require("body-parser");
const url = require("url")


// 登录
router.post('/login',bodyParser.json(),(req,res)=>{
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    // 查询SQL语句
    const sql = "select * from user where username= ? and password= ?"
    const arr = [username,password];
    sqlFn(sql,arr,result=>{
        if(result.length > 0){
            // console.log(result);
            const token =jwt.sign({
                id:result[0].id,
                username:result[0].username
            },jwtsecret.secret)

            res.send({
                status:200,
                token,
                msg:"登陆成功"
            })
        }else{
            res.send({
                status:400,
                msg:"用户名密码错误"
            })
        }
    })
})
// 注册
router.post("/register",bodyParser.json(),(req,res)=>{
    const username =req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const arr = [username,password,email];
    // console.log(arr);
    var sql = "insert into user values(null,?,?,?)";
    sqlFn(sql,arr,result=>{
        console.log(result);
        // 影响行数
        if(result.affectedRows >0){
            res.send({
                status:200,
                msg:"注册成功"
            })
        }else{
            res.send({
                status:400,
                msg:"注册失败"  
            })
        }
    })
})
// 调取产品数据
router.post("/backend/item/selectTbItemAllByPage",bodyParser.json(),(req,res)=>{
    // 接口参数：page
    var page = url.parse(req.url,true).query.page || 1;
    const sql = "select * from project order by id desc limit 10 offset "+(page - 1) * 10;
    sqlFn(sql,null,result=>{
        if(result.length>0){
            res.send({
                status:200,
                result
            })
        }else{
            res.send({
                status:400,
                msg:"数据读取失败"
            })
        }
    })
})


module.exports = router