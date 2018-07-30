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
    res.render('home');
});

var server = app.listen(3000);


var ws = require("nodejs-websocket");
//创建服务器，实现握手操作，connection
var server = ws.createServer(function (conn) {
    console.log('connection sussess');
    //1,接收客户端发生的数据str
    conn.on("text", function (str) {
        //2,当前的server向客户端发生数据，forEach向连接服务器的所有的客户端发送数据
        server.connections.forEach(function (connection) {
            connection.sendText(str);
        });
    });
});
server.listen(8080);//设置服务器端口