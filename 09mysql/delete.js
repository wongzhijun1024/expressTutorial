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
var  userGetSql = 'DELETE FROM users where id = 131';
//5，删除操作
/**
 * 1，userGetSql，sql语句
 * 2，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
 */
connection.query(userGetSql,function (err, result) {
    if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
    }
    console.log(result);
});
//6,连接结束
connection.end();