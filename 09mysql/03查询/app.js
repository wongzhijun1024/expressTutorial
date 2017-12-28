var express = require('express');
var UserDao = require('./UserDao');
var app = express();

var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/', function (req, res) {

    var dao = new UserDao();

    dao.init();

    dao.query(0,'users',function (err, data) {

        console.log(data[0].name);

    })


})
var server = app.listen(8088)