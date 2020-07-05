const express = require("express")
const app = express()
const router = express.Router()


/* 路由器级中间件 start */
// 路由器级中间件的工作方式与应用级中间件的工作方式相同，只是它绑定到一个实例express.Router()

router.use(function (req, res, next) {
    console.log("时间： ", Date.now())
    next();
})

router.use("/user/:id", function (req, res, next) {
    console.log("请求地址", req.originalUrl);
    next()
}, function (req, res, next) {
    console.log("请求方式： ", req.methods);
    next();
})

router.get("/user/:id", function (req, res, next) {
    if(req.params.id === "0"){
        next("router");
    }else{
        next("regular");
    }
})

router.get("/user/:id", function (req, res, next) {
    console.log(req.params.id);
    res.render("special");
})


/* 路由器级中间件 end */



app.use('/', router);

app.listen(3000, function () {
    console.log("Example app listen on port 3000!");
    console.log("Hold ⌘ and click http://localhost:3000/ to visit ");
})

// 没搞成功
// 参考 https://cloud.tencent.com/developer/section/1135864