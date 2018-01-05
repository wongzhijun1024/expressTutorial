/**
 * Created by boy on 2017/7/10.
 */
//1,引入express模块
var express = require("express");
//2,创建app对象
var app = express();
//3,指定模板引擎
app.set("views engine", 'ejs');
//4,指定模板位置
app.set('views', __dirname + '/views');

//5,路由
app.get("/", function(req, res) {
    //6,利用模板文件home.ejs渲染为html
    var Student = require('./been/Student.js');
    var length=5;
    var students = new Array();
    for(var i=0;i<length;i++){
        var student = new Student('小明'+i,19+i);
        students[i]=student;
    }

    res.render('home', {
        introduce:'你的用户密码不正确',
            order:{price:'100'},
        name: '门户页面',users:students
    }
    );
});

var server = app.listen(8088, function() {
    console.log("请在浏览器访问：http://localhost:8088/");
});