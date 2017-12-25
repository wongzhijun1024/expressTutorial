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
var server = app.listen(8081)