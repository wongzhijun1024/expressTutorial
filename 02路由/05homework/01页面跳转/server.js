//1,引入express模块
var  express = require('express');
//2,创建app
var  app = express();
//3,get请求
app.get('/index',function (rq,res) {

    res.sendFile( __dirname + "/" + "index/index.html" );
});

app.get('/secondPage',function (req,res) {
    var name=req.query.name;
    var passwd=req.query.passwd;

    var html = "<html><head></head><body><h1>"+name+":"+passwd+"</h1><a href='http://127.0.0.1:8888/thirdPage?msg="+name+passwd+"333'>跳转</a></body></html>";

    res.write(html);
    res.end();

});

app.get('/thirdPage',function (req,res) {
    var msg=req.query.msg;
    res.write(msg+"i am in success");
    res.end();
});

app.listen(8888);