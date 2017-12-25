/**
 * Created by boy on 2017/7/19.
 */

function SingerModel() {
    var MongoClient;
    var DB_CONN_STR;
    this.init=function () {
        //1，获得MongoClient对象
         MongoClient = require('mongodb').MongoClient;
       //2,获得连接信息
         DB_CONN_STR = 'mongodb://localhost:27017/king';//数据库为 king
    }
    
    this.find=function (mondodb,callback) {

        MongoClient.connect(DB_CONN_STR, function(err, db) {
            console.log("连接成功！");
            //连接到表 singer
            var collection = db.collection('singer');
            //查询数据
            //var whereStr = {"name":'刘德华'};
            collection.find(mondodb).toArray(function(err, result) {

                callback(err,result);
              /*  if(err)
                {
                    console.log('Error:'+ err);
                    return;
                }
                console.log(result);*/
            });
        });
    }
    
}


Module.exports=SingerModel;
