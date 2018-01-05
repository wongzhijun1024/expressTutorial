/**
 * Created by boy on 2017/7/10.
 */
var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

//1,接受表单的请求
app.use(bodyParser.urlencoded({ extended: false }));
//2,设置下载的地址
app.use(multer({ dest: '/uploads/'}).array('image'));

app.get('/index', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})

app.post('/upload', function (req, res) {

    console.log(req.files[0]);  // 上传的文件信息
   /* //3设置下载的图片
    var des_file = __dirname + "/upload/" + "123456.jpg";
    //4,读取文件
    fs.readFile( req.files[0].path, function (err, data) {
        //5,写入文件
        fs.writeFile(des_file, data, function (err) {
            if( err ){
                console.log( err );
            }else{
                response = {
                    message:'File uploaded successfully',
                    filename:req.files[0].originalname
                };
            }

            res.end( JSON.stringify( response ) );
        });
    });*/
})

var server = app.listen(8088);