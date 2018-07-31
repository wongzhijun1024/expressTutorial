/**
 * Created by boy on 2017/7/10.
 */
var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer = require('multer');

//3,指定模板引擎
app.set("views engine", 'ejs');
//4,指定模板位置
app.set('views', __dirname + '/views');

//1,接受表单的请求
app.use(bodyParser.urlencoded({extended: false}));
//2,设置下载的地址
app.use(multer({dest: '/public/'}).array('image'));

app.get('/index', function (req, res) {
    res.sendFile(__dirname + "/views/" + "index.html");
})

app.post('/upload', function (req, res) {
    //1,原始图片的地址
    var filepath = req.files[0].path;
    var fileKey = "nodejs"+new Date().getTime()+'img';
    //1, 引入腾讯模块
    var QQUtil = require('./util/QQutil');
    //2,创建对象
    qqUtil = new QQUtil();
    qqUtil.init();
    //3,上传图片到云服务器
    qqUtil.insert(fileKey, filepath,fs, function () {
        //1, 引入模块
        var ImageUtil = require('./dao/ImageUtil');
        //2,创建对象
        imageUtil = new ImageUtil();
        imageUtil.init();
        //3,插入语句
        imageUtil.inserImage(0, fileKey);

        res.redirect('./index');
    })
})
app.get('/infor', function (req, res) {

    //1, 引入模块
    var ImageUtil = require('./dao/ImageUtil');
    //2,创建对象
    imageUtil = new ImageUtil();
    imageUtil.init();
    //1, 引入腾讯模块
    var QQUtil = require('./util/QQutil');
    //2,创建对象
    qqUtil = new QQUtil();
    qqUtil.init();
    //3,查询语句
    imageUtil.queryAll(function (imageData) {
        //根据数据，获得key值
        var length = imageData.length;
        for (let i = 0; i < length; i++) {
            let key = imageData[i].imageKey;
            //到腾讯云平台获得图片地址
            qqUtil.query(key,function (url) {
                imageData[i].imageKey=url;
            })
        }
        res.render('infor', {imageData: imageData})
    });
});

var server = app.listen(8088);
