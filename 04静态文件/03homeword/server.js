/**
 * Created by boy on 2017/7/10.
 */
var express = require('express');
var app = express();

var viewPath = __dirname+"/views/";
app.use(express.static('public'));

app.get('/index', function (req, res) {
    res.sendFile(viewPath+"index.html");
})

app.get('/products',function (req, res) {
    res.sendFile(viewPath+"products.html");
});


app.get('/login',function (req,res) {
    //1,从req里面取得用户名和密码   02 路由
    //2,根据用户名去数据库去密码    09 03查询
    //3,if(密码为kong)提示用户去注册
    if(true){
        res.sendFile(viewPath+"register.html");
        return;
    }

    //4,把取得的密码和req取得密码笔记比较
    //5,if(合法)跳转到主页面否则跳转到回去

    if(true){
        res.sendFile(viewPath+"mian.html");
    }else{
        res.sendFile(viewPath+"login.html");
    }
});
var server = app.listen(8081)