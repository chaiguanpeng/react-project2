let express = require('express');
let bodyParser = require("body-parser");
let session = require('express-session');
let app = express();
let sliders = require('./mock/sliders');
//跨域不能发送cookie.手写
// let cors = require("cors");
// app.use(cors());
app.use(function (req, res, next) {
    // 解决跨域
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Credentials",true); //设置cookie

    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By", ' 3.2.1');
    if (req.method == "OPTIONS") return res.end(); /*让options请求快速返回*/
    else next();
});
app.use(bodyParser.json());
app.use(session({
    resave:true,
    secret:'zfpx',
    saveUninitialized:true
}))
//轮播数据
app.get('/getSliders',function (req, res) {
    res.json(sliders);
});
//课程数据
let lessons = require("./mock/lessons");
//请求的地址 http://getLessons/vue?offset=0&limit=5
app.get("/getLessons/:category",function (req, res) {

    let category = req.params.category;    //取到分类
    let {offset,limit} = req.query;        //请求参数中拿到偏移量和条数
    offset = isNaN(offset)?0:parseInt(offset); //偏移量
    limit = isNaN(limit)?5:parseInt(limit); //每页的条数
    let list = lessons;
    if(category!="all"){
       list =  list.filter(item=>item.category == category);
    }

    let total = list.length;
    //分页数据
    list = list.slice(offset,offset+limit);
    // list.forEach(item=>item.title = Math.random());  测试是否下拉刷新
    setTimeout(function () {
        res.send({
            list,
            hasMore:total>offset+limit
        })
    },1000)

})

//注册和登陆
let users = [];
app.post("/reg",function (req, res) {
    let user = req.body;
    users.push(user);
    res.json({
        success:'注册成功'
    })
});
app.post("/login",function (req, res) {
    let body = req.body; //{username,password}
    let user = users.find(item=>item.username ==body.username&& item.password == body.password);
    console.log("allusers",users);
    if(user){
        //登陆的时候把用户放入到回话中
        req.session.user = user;
        res.json({
            success:'登陆成功',
            user
        })
    }else {
        res.json({
            error:'登陆失败'
        })
    }
});

app.get("/validate",function (req,res) {
    let user = req.session.user;
    console.log("validate",user);
    if(user){
        res.json({
            sussess:"此用户已经登陆",
            user
        });
    }else {
        res.json({
            error:"此用户未登陆"
        })
    }
})






app.listen(8080);