const express = require("express");

const app = express();
const PORT = 8000;

app.use((req, res, next) => {
    console.log(`${new Date().toLocaleString()} ${req.method} ${req.url}`);
    next();
});

app.get("/hello", (req, res, next) => {
    if (Math.random() > 0.5) return next("route"); 
    next(); 
}, (req, res) => {
    res.end("hi"); 
});

// Second /hello handler
// app.get("/hello", (req, res) => {
//     res.end("you came here cause the middleware let you thru secretly :)");
// });


// app.get("/hello", (req, res) => {
//     res.end("hi");
// })

app.get("/hello", (req, res) => {
    res.end("you came here cause the middleware let you thru secretly :)")
})

app.post("/echo", (req, res) => {
    let body = "";

    req.on("data", (chunk) => {
        body += chunk;
    })

    req.on("end", () => {
        res.end(`${body}`);
    })

})

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})