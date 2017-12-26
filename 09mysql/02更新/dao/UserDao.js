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
            database:'fs_music'          //数据库里面的数据
        });
        //3,连接
        connection.connect();
    }
    
    this.updata=function (user) {
        //4,编写sql语句
        var userModSql = 'UPDATE users SET name = ?,password = ? WHERE Id = ?';

        var userModSql_Params = [user.getName(), user.getPasswd(),user.getId()];
        console.log(userModSql_Params);
       //5，更新操作
        connection.query(userModSql,userModSql_Params,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                return;
            }
        });
    }
    
    this.finish=function () {
        
    }
}

module.exports=UserDao;