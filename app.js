const express = require("express");
const app = express();

// 路由 start
app.get("/", function (request, result) {
    result.send("Hello World!");
});

app.post('/', function (req, res) {
    res.send('Got a POST request')
});

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

app.get('/abc?d', function (request, result) {
    result.send(`abcd or abd`)
})


app.get('/abc+d', function (request, result) {
    result.send(`abcd or abccd or abcccd or ...`)
})


app.get('/abc*d', function (request, result) {
    result.send(`abcd or abd`)
})


app.get('/ab(cd)?e', function (request, result) {
    result.send(`abcd or abd`)
})



// 一个到多个回调
app.get('/example/a', function (req, res) {
    res.send('Hello from A!')
})


app.get('/example/b', function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
}, function (req, res) {
    res.send('Hello from B!')
})



var cb0 = function (req, res, next) {
    console.log('CB0')
    next()
}
var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
}
var cb2 = function (req, res) {
    res.send('Hello from C!')
}
app.get('/example/c', [cb0, cb1, cb2])




var cb00 = function (req, res, next) {
    console.log('CB00')
    next()
}
var cb01 = function (req, res, next) {
    console.log('CB01')
    next()
}
app.get('/example/d', [cb00, cb01], function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
}, function (req, res) {
    res.send('Hello from D!')
})


// app.route 可以为单个路径指定不同的方法
app.route('/book')
    .get(function (req, res) {
        res.send('Get a random book')
    })
    .post(function (req, res) {
        res.send('Add a book')
    })
    .put(function (req, res) {
        res.send('Update the book')
    })



// 路由 end


// 静态资源配置 - 中间件
app.use("/s", express.static("public"));


// 404 怎么处理 - 中间件
app.use(function (req, res, next) {
    res.status(404).send("404 Not Found!~@#$*(^%")
});


// 错误处理 - 中间件
app.use(function (err, request, result, next) {
    console.log(err.stack);
    res.status(500).send("Something broke!")
});

// 呈现 HTML
// 为什么 推荐使用 res.sendFile() 而不推荐 res.render()  ？
// 源自 https://cloud.tencent.com/developer/section/1135861

app.listen(3000, function () {
    console.log("Example app listen on port 3000!");
    console.log("Hold ⌘ and click http://localhost:3000/ to visit ");
});

