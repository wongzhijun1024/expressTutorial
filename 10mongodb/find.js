/**
 * Created by boy on 2017/7/18.
 */
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/king';


MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功！");
    //连接到表 singer
    var collection = db.collection('singer');
    //查询数据
    var whereStr = {"name":'刘德华'};
    collection.find(whereStr).toArray(function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
        console.log(result);
    });
});