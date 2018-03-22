var express = require('express');
var UserDao = require('./UserDao');
var app = express();

var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//3,指定模板引擎
app.set("views engine", 'ejs');
//4,指定模板位置
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.get('/', function (req, res) {
    var dao = new UserDao();
    dao.init();
    this.callback = function (err, data) {
        console.log(data);
        res.render('home', {
                introduce:'你的用户密码不正确',
                order:{price:'100'},
                name: '门户页面',users:data
            }
        );
    };
    dao.query(0,'users',this.callback)


})
var server = app.listen(8088)