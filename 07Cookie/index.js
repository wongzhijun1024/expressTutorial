var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
app.get('/', function (req, res) {
    // 如果请求中的 cookie 存在 isVisit, 则输出 cookie
    // 否则，设置 cookie 字段 isVisit, 并设置过期时间为1分钟
    if (req.cookies.isVisit) {
        console.log(req.cookies);
        res.send("再次欢迎访问");
    } else {
        //设置键isVisit的值是1，有效的时间是60秒
        res.cookie('isVisit', 1, {maxAge:2 * 1000});
        res.send("欢迎第一次访问");
    }
});
app.listen(8088);