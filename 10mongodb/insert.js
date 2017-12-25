/**
 * Created by boy on 2017/7/18.
 */
//1，获得MongoClient对象
var MongoClient = require('mongodb').MongoClient;
//2,获得连接信息
var DB_CONN_STR = 'mongodb://localhost:27017/king';//数据库为 king

//3，MongoClient对象连接数据
MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功！");
    //4，连接到表 singer
    var collection = db.collection('singer');
    //5，插入数据
    var data = [{"name":"刘德华","introduce":"是个帅哥"},{"name":"小美","introduce":"是个美女"}];
    collection.insert(data, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
        console.log(result);
    });
});
