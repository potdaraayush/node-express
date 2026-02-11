const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("home");
});

app.get("/about", function(req, res) {
    res.send("this is about page");
})

app.get("/api/users", function(req, res) {
    const users = [
    {
        "id": 1,
        "firstName": "yush",
        "lastName": "pantsok"
    }, 
    {
        "id": 2,
        "firstName": "spongebob",
        "lastName": "pantsok"
    }];
    res.end(JSON.stringify(users));
});

app.listen(8000, function() {
    console.log("server is listening on port 8000");
})