/**
 * Created by Administrator on 2017/12/21 0021.
 */
//1,引入fs模块
var fs = require('fs');
//2,写入数据
fs.writeFile('data.txt','with vast inprovement of their income',function (err) {
    if(err){
        return console.log(err)
    }
});
//3,写入数据结束
console.log('写入数据结束')

fs.readFile('data.txt',function (err,data) {
    if(err){
        return console.log(err)
    }

    console.log(data.toString());
});

//4,读取数据结束
console.log('读取数据结束')