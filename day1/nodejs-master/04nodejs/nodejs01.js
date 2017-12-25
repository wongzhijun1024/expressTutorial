/**
 * Created by Administrator on 2017/12/21 0021.
 */
//1,引入fs模块
var fs = require('fs');
//2,读取文件的数据
var data = fs.readFileSync('data.txt');
//3,输入文件数据
console.log(data.toString());
//4,程序结束
console.log('程序结束!');