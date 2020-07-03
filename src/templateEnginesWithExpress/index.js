const express = require("express")
const app = express()

// 设置模板目录
app.set('views', './views');

// 设置模板引擎
app.set('view engine', 'pug');

app.get('/', function (req, res, next) {
    res.render("index", {
        title: "Hey",
        message: "Hello there!"
    })
});

app.listen(3000, function () {
    console.log("Example app listen on port 3000!");
    console.log("Hold ⌘ and click http://localhost:3000/ to visit ");
})
