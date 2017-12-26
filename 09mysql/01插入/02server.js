
//1, 引入模块
var UserSql = require('./UserSql');
//2,创建对象
userSql =  new UserSql();

userSql.init();
//3,插入语句
userSql.inserUser('seraph',123456);
