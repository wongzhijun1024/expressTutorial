var express = require('express');
var session = require('express-session');

var app = express();

app.use(session({
    secret: '12345',
    name: 'express_11_cookie',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {maxAge: 80000 },     //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
}));
app.get('/login', function(req, res){

    if (req.session.sign) {//检查用户是否已经登录
        console.log(req.session);//打印session的值
        res.send('welecome <strong><a href="' + req.session.name + '"/></strong>, 欢迎你再次登录');
    } else {
        req.session.sign = true;
        req.session.name = 'http://blog.csdn.net/wzjisking?viewmode=contents';
        res.send('欢迎登陆！');
    }
});

app.get('/index', function(req, res){

    if (req.session.sign) {//检查用户是否已经登录
        console.log(req.session);//打印session的值
        res.send('welecome <strong><a href="' + req.session.name + '"/></strong>, 我在主页面欢迎你登录');
    } else {
        req.session.sign = true;
        req.session.name = 'http://blog.csdn.net/wzjisking?viewmode=contents';
        res.send('欢迎登陆！');
    }
});


app.listen(8088);