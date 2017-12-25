/**
 * Created by Administrator on 2017/12/21 0021.
 */
var fs = require("fs");

console.log("准备写入文件");
fs.writeFile('data.txt', '我是通过写入的文件内容！',  function(err) {
    if (err) {
        return console.error(err);
    }

});