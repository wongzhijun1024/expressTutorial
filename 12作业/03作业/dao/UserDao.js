function UserDao(){

    this.verification=function(name,passwd,callback){
        //1,根据name到数据库查询原始密码
        var UserMapping = require('./UserMapping');
        //2,创建UserMapping对象
        var userMapping =  new UserMapping();
        //3,初始化
        userMapping.init();
        //4,查询数据
        userMapping.query(name,function(err,data){

            var buffer =data[0].password;
                   if(passwd==buffer){
                       callback(true);
                   }else{
                       callback(false);
                   }
        });
       /*    var buffer='';
           //2,验证密码
           if(buffer==passwd){
            return true;
        }else{
            false;
        }*/
    }
}
module.exports=UserDao;