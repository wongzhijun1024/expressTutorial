

var UserDao = require('./dao/UserDao');
var User = require('./been/User');

var user = new User(134,'小lin',123456);

console.log(JSON.stringify(user));

user.setPasswd(66585);

var userDao =  new UserDao();
userDao.init();
console.log(JSON.stringify(user));
userDao.updata(user)

