//1，调用MySQL模块
var mysql  = require('mysql');

//2，创建一个connection
var connection = mysql.createConnection({
    host     : 'localhost',       //主机 ip
    user     : 'root',            //MySQL认证用户名
    password : '',                //MySQL认证用户密码
    port: '3306',                 //端口号
    database:'fs_music'          //数据库里面的数据
});
//3,连接
connection.connect();
//4,编写sql语句
var userModSql = 'UPDATE users SET name = ?,password = ? WHERE Id = ?';
var userModSql_Params = ['好孩子', '111',132];

//5，更新操作
connection.query(userModSql,userModSql_Params,function (err, result) {
    if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
    }
});
//6,连接结束
connection.end();