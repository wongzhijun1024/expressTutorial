function UserDao() {

    /**
     * 数据库连接
     */
    var connection;
    this.init=function () {
        //1，调用MySQL模块
        var mysql  = require('mysql');

        //2，创建一个connection
         connection = mysql.createConnection({
            host     : 'localhost',       //主机 ip
            user     : 'root',            //MySQL认证用户名
            password : 'root',                //MySQL认证用户密码
            port: '3306',                 //端口号
            database:'test'          //数据库里面的数据
        });
        //3,连接
        connection.connect();
    }
    
    this.query=function (id,user,call) {
        var  userGetSql = 'SELECT * FROM '+user;
        /**
         *query，mysql语句执行的方法
         * 1，userAddSql编写的sql语句
         * 2，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
         */
        connection.query(userGetSql,function (err, result) {
            if(!err){
                call(err,result);
            }else{
                console.log('[INSERT ERROR] - ',err.message);
                return;
            }
        });
    }
    /*通过name获得用户*/
    this.queryByName=function (name,call) {
        var sql = "select * from users where name = '"+name+"'";
        /**
         *query，mysql语句执行的方法
         * 1，userAddSql编写的sql语句
         * 2，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
         */

        console.log(sql);
        connection.query(sql,function (err, result) {
            if(!err){
                call(result);
            }else{
                console.log('[INSERT ERROR] - ',err.message);
                return;
            }
        });
    }
    
    this.insert= function (name,email,passwd,call) {


        //3,编写sql语句
        var  userAddSql = 'INSERT INTO users(name,email,passwd) VALUES(?,?,?)';
        var  userAddSql_Params = [name,email,passwd];
        //4,进行插入操作
        /**
         *query，mysql语句执行的方法
         * 1，userAddSql编写的sql语句
         * 2，userAddSql_Params，sql语句中的值
         * 3，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
         */
        connection.query(userAddSql,userAddSql_Params,function (err, result) {
            if(!err){
                console.log(result);
                call();
            }else{
                console.log(err);
            }
        });
      //5,连接结束
        connection.end();


    }
    this.finish=function () {
        
    }
}

module.exports=UserDao;