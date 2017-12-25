/**
 * Created by boy on 2017/7/10.
 */
var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/uploads/'}).array('image'));

app.get('/index', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})

app.post('/upload', function (req, res) {

    console.log(req.files[0]);  // 上传的文件信息

    var des_file = __dirname + "/upload/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
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
    });
})

var server = app.listen(8888);