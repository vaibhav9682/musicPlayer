const http = require('http');
const port = 7000;
const fs = require('fs');



function serverhandler(req, res) {

    console.log(req.url);
    res.writeHead(200, { 'content-type': 'text/html' })

    let filepath;

    switch (req.url) {
        case '/':
            filepath = './index.html';
            break;
        case '/playlist':
            filepath = './single-playlist-screen.html';
            break;
        default:
            filepath = './error.html';
    }

    fs.readFile(filepath, function (err, data) {
        if (err) {
            console.log("error:", err);
            return res.end("<h1>Error</h1>");
        }
        return res.end(data);
    })

}

//creation of server
const server = http.createServer(serverhandler);

//   to check server health
server.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("server is running on port :", port);
})