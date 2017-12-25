/**
 * Created by Administrator on 2017/12/21 0021.
 */
//1,引入fs模块
var fs = require('fs');

//2,获得文本数据
fs.readFile('data.txt',function (err,data) {
   //1,如果err不为空，就说明读取错误，然后返回err的数据
   if(err)
       return console.log(err);
   //2,显示读取的数据
    console.log(data.toString());
});

//3,程序结束
console.log('程序结束');

