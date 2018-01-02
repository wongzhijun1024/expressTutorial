var express = require('express');
var app = express();

app.use(express.static('public'));
//指定模板引擎
app.set("views engine", 'ejs');
//指定模板位置
app.set('views', __dirname + '/views');

var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/index', function (req, res) {
    res.render('index', {}
    );
})

app.post('/indexLogin',urlencodedParser, function (req, res) {
    //1,获得用户请求的post数据
    var username =req.body.username;
    var password = req.body.password;
    //2,引入UserDao
    var UserDao = require('./dao/UserDao');
    var userDao =  new UserDao();
    //3, 验证用户名和密码是否合法
    userDao.verification(username,password,function(result){

        if(result==0){
            console.log("用户不存在");
        }else if(result==1){
            console.log("密码错误");
        }else{
            console.log("密码正确");
        }

        /* if(result){
             res.render('index', {}
             );
         }else{
             res.render('login', {msg:'密码错了'}
             );
         }*/

    });

})

app.get('/login', function (req, res) {
    res.render('login', {}
    );
})
app.get('/productionList',function (req, res){
   //1,获得请求的数据



    res.render('production', {}
    );
});

app.get('/production',function (req, res){
    //1,获得请求的数据
    var id = '12';
    var ProductionDao = require('./Dao/ProductionDao');
    var productionDao = new ProductionDao();

   var production= productionDao.getProduction(id);

    var data=JSON.stringify( production );
    res.render('production', data);
});


var server = app.listen(8088)