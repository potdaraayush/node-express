const http = require("http");
const url = require("url");

const PORT = 8000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if(req.url == "/favicon.ico") {
        return res.end();
    }

    const log = `${Date.now()}: ${req.url} new request recevied\n`;
    console.log(log);
    

    switch(parsedUrl.pathname) {
        case "/hello" :
            if(req.method === "GET") {
                res.end("hi vro");
                break;
            }
        case "/echo":
            if(req.method === "POST") {
                let body = "";
                req.on("data", dataStream => body+=dataStream);
                req.on("end", () => {
                    try {
                        const data = JSON.parse(body);
                        res.end(JSON.stringify(data));
                    } catch {
                        res.end("couldnt parse. invalid json.")
                    }
                })
            }
            break;
    }
})

server.listen(8000, () => {
    console.log("server is listening on port 8000");
    
})