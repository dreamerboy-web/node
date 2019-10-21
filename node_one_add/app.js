const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    let parsedURL = url.parse(req.url);

    switch (parsedURL.pathname) {
        case '/login':
            fs.readFile('./login.html', ((err, data) => {
                res.end(data)
            }));
            break;
        case '/register':
            fs.readFile('./register.html', ((err, data) => {
                res.end(data)
            }));
            break;
        case '/home':
            fs.readFile('./index.html', ((err, data) => {
                res.end(data)
            }));
            break;
        default:
            fs.readFile('./404.html', ((err, data) => {
                res.end(data)
            }));
            break;
    }

});

server.listen(3000, (err, dtta) =>{

    if (err) console.log("Error"); else console.log("Listen 3000");

});