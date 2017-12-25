var express = require('express');
var app = express();

app.get('/index.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "view/home/index.html" );
})

app.get('/process_get', function (req, res) {


    var name = req.query.first_name;

    var html="<html><head></head><body><h1>"  +name+ " </h1><a href='http://192.168.5.105:8089/'></a></body></html>";



})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})