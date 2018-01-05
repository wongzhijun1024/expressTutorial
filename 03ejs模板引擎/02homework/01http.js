/**
 * Created by boy on 2017/7/10.
 */
var express = require("express");
var app = express();

app.use(express.static('public'));
//指定模板引擎
app.set("views engine", 'ejs');
//指定模板位置
app.set('views', __dirname + '/views');

//利用模板文件home.ejs渲染为html
app.get("/", function(req, res) {


    res.render('index', {}
    );
});

app.get("/profile", function(req, res) {
    res.render('profile', {name:'kkkkkJenifer Smith',iconUrl:'img/profile-widget-avatar.jpg',introduce:'Hello I’m Jenifer Smith, a leading expert in interactive and creative design.'}
    );
});



var server = app.listen(3000, function() {
    console.log("请在浏览器访问：http://localhost:3000/");
});