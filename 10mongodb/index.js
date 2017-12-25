/**
 * Created by boy on 2017/7/19.
 */

var SingerModel =require("./SingerModel");
//2,创建对象
var singer = new SingerModel();
//3,数据初始化
singer.init();
//4,编写mongodb数据
var whereStr = {"name":'刘德华'};
//5,执行插入
singer.find(whereStr,function (err,result) {

    if(err){
        console.error(err);
    }else{

    }
})