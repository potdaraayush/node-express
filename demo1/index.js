const http = require("http");

const server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("hello from server");
});

server.listen(8000, function() {
    console.log("server is running vro");
});