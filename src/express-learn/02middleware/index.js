const express = require("express")
const app = express()
const myMiddleware = require("./my-middleware")

const myLogger = function(req,res,next){
    console.log("logged");
    next()
}
app.use(myLogger);

const Timer = function(req, res, next){
    req.requestTimer = Date.now();
    next()
}
app.use(Timer);

app.use(myMiddleware({
    a: 1,
    b: 2
}))


// logger 必须在它上边，才能输出 logged
app.get('/', function (req, res) {
    let responseText = "你好 中间件<br>";
    responseText += "<small>请求时间："+req.requestTimer+"</small>"
    res.send(responseText);
})


// 中间件加载顺序非常重要：首先加载的中间件功能也首先执行。
// 如果myLogger在到根路径的路由之后加载，请求将永远达不到它，并且应用程序不会打印“LOGGED”，因为根路径的路由处理程序会终止请求 - 响应循环。


app.listen(3000, function () {
    console.log("Example app listen on port 3000!");
    console.log("Hold ⌘ and click http://localhost:3000/ to visit ");
})