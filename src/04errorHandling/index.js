const express = require("express")
const app = express()


app.use(function (arr, req, res, next) {
    console.error(err.stack);
    res.status(500).send("Something Broke!")
})

app.get("/", function (req, res, next) {
    console.log("///")
    res.send("Error Test!")
})

app.listen(3000, function () {
    console.log("Example app listen on port 3000!");
    console.log("Hold ⌘ and click http://localhost:3000/ to visit ");
})


// 参考 https://cloud.tencent.com/developer/section/1135866