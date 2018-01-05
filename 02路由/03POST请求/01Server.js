var express = require('express');
var app = express();

var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/index.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})

app.post('/index', urlencodedParser, function (req, res) {


    var name =req.body.first_name;
    var last_name = req.body.last_name;

    res.write(name+":aaaa"+last_name);
    res.end();
})

var server = app.listen(8081)