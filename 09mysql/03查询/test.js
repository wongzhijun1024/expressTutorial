//1，调用MySQL模块
var mysql  = require('mysql');

//2，创建一个connection
var connection = mysql.createConnection({
    host     : 'localhost',       //主机 ip
    user     : 'root',            //MySQL认证用户名
    password : 'root',                //MySQL认证用户密码
    port: '3306',                 //端口号
    database:'fs_music'          //数据库里面的数据
});
//3,连接
connection.connect();

var sql="select song_menu.name,song.song_name,song.song_icon_url,song.song_url from song_menu right join song on song.song_menu_id=song_menu.id"

//4,更新数据
connection.query(sql,function (err,result) {
    if(err)
        return console.log(err);
    console.log(result);
})

connection.end();