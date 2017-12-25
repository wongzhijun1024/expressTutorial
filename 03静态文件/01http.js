/**
 * Created by boy on 2017/7/10.
 */
var express = require("express");
var app = express();

//设置静态文件
app.use(express.static('public'));
//指定模板引擎
app.set("views engine", 'ejs');
//指定模板位置
app.set('views', __dirname + '/views');

//利用模板文件home.ejs渲染为html
app.get("/", function(req, res) {


    res.render('home', {
            name: '门户页面',img:'img/test.jpg',users:[{
                "name" : "小刚",
                "age" : "18",
                "intrduce" : "我是一个很帅的男孩！",
                "id": 1
            }, {
                "name" : "小明",
                "age" : "19",
                "intrduce" : "我是一个很美的男孩！",
                "id": 2
            },{
                "name" : "小花",
                "age" : "17",
                "intrduce" : "我是一个很妖艳的男孩！",
                "id": 3
            }]
        }

    );
});

var server = app.listen(3000, function() {
    console.log("请在浏览器访问：http://localhost:3000/");
});