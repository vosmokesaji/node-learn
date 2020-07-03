// 可以被模块化引用的路由
// 代码见这里  https://cloud.tencent.com/developer/section/1135862#stage-100022402
var express = require("express");
var router = express.Router()

router.use(function timeLog(request, result, next) {
    console.log("Time: ", Date.now());
    next();
})
router.get("/", function (request, result) {
    result.send("Birds home page")
})
router.get("/about", function (request, result) {
    result.send("About birds");
})

module.exports = router;

