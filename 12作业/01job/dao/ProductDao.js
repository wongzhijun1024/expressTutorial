function ProductDao() {

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
            database:'bonfire'          //数据库里面的数据
        });
        //3,连接
        connection.connect();
    }

    this.query=function (id,callback) {
        //4,编写sql语句
        var sql = 'select * from product where id = '+id;

        //5，更新操作
        connection.query(sql,function (err, result) {
            if(!err){
                callback(result);
            }else{

                    console.log('[select ERROR] - ',err.message);


            }
        });
    }

    this.finish=function () {

    }
}

module.exports=ProductDao;