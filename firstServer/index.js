const http = require('http');
const fs = require('fs');
const url = require("url");

const server = http.createServer((req, res) => {
    if(req.url === "/favicon.ico") {
        return res.end();
    }

    const log = `${Date.now()}: ${req.url} New Request Received\n`;
    const myUrl = url.parse(req.url, true);

    console.log(myUrl);

    fs.appendFile("log.txt", log, (err) => {
        switch(myUrl.pathname) {
            case "/": 
                res.end("home page");
                break;
            case "/about":
                const username = myUrl.query.name;
                res.end("sup "+username);
                break;
            default:
                res.end("404 page not found");
        }
    })
});

server.listen(8000, () => console.log("Server is listening on port 8000"));