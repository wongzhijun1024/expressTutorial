var express = require('express');
var app = express();
//list 页面 GET 请求
app.get('/list', function (req, res) {
    console.log("/list_user GET 请求");
    res.send('用户列表页面');
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})