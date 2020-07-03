const express = require("express")
const app = express()

/* 应用程序级中间件 */

// 没有指定路径的中间件
app.use(function(req, res, next){
    console.log("没有指定路径的中间件");
    next();
})

// 指定路径的中间件
app.use("/user/:id", function (req, res, next) {
    console.log("指定地址的中间件", "请求类型： ",req.method, );
    next();
})


// 加载一系列的中间件
app.use("/user/:id", function (req, res, next) {
    console.log("请求地址： ", req.originalUrl);
    next();
}, function (req, res, next) {
    console.log("请求类型： ", req.method);
})






app.get('/', function (req, res) {
    res.send("你好 中间件");
})

app.listen(3000, function () {
    console.log("Example app listen on port 3000!");
    console.log("Hold ⌘ and click http://localhost:3000/ to visit ");
})

// 参考 https://cloud.tencent.com/developer/section/1135864