const express = require("express");
const app = express();

app.get("/", function (request, result) {
    result.send("Hello World!");
});

app.listen(3000, function () {
    console.log("Example app listen on port 3000!");
    console.log("Hold ⌘ and click http://localhost:3000/ to visit ");
})

