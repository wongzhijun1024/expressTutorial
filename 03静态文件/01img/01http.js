/**
 * Created by boy on 2017/7/10.
 */
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World');
})
var server = app.listen(8081)

//  http://127.0.0.1:8081/img/test.jpg访问图片
