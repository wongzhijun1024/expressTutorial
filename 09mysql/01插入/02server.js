
/*
//1, 引入模块
var UserSql = require('./dao/UserSql');
//2,创建对象
userSql =  new UserSql();

userSql.init();
//3,插入语句
userSql.inserUser('小刚',123456);
*/


var User = require('./been/User')

var user = new User('小刚',123456);

console.log(JSON.stringify(user))