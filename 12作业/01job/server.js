/**
 * Created by boy on 2017/7/10.
 */
var express = require('express');
var app = express();

var viewPath = __dirname+"/views/";
app.use(express.static('public'));

//3,指定模板引擎
app.set("views engine", 'ejs');
//4,指定模板位置
app.set('views', __dirname + '/views');

app.get('/index', function (req, res) {


//1,查询数据
    //1,查询精选产品
    var FeaturedDao = require('./dao/FeaturedDao');
    //创建对象
    var featuredDao = new FeaturedDao();

    //数据初始化
    featuredDao.init();

    //查询数据
    featuredDao.query(function (data) {

        console.log(data);
        res.render('index',{featured:data});
    });


   // res.render('index',{});
})
app.get('/single',function (req,res) {
    var id = req.query.id;

    var ProductDao = require('./dao/ProductDao');
    var productDao = new ProductDao();
    productDao.init();
    productDao.query(id,function (data) {


        var ImageDao = require('./dao/ImageDao');
        var imageDao = new ImageDao();
        imageDao.init();
        imageDao.query(id,function (data1) {

            res.render('single',{product:data,imges:data1});
        });


    });





});
var server = app.listen(8088)