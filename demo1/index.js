const http = require("http");

const server = http.createServer(function(req, res) {
    switch(req.url) {
        case "/":
            res.end(JSON.stringify({message: "say hi lil bro"}));
            break;
        case "/about":
            res.end(JSON.stringify({message: "this is the about page"}));
            break;
        case "/api/users":
            const users = [
                {id: 1, name: "yush"},
                {id: 2, name: "pants ok"}
            ];
            res.end(JSON.stringify(users));
            break;
        default:
            res.end("404 error vro wrap it up");
    }
});

server.listen(8000, function() {
    console.log("server is listening on port 8000");
});