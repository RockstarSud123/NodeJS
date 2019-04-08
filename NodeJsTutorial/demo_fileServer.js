// Node.js File Server
// ====================

// Now we know how to parse the query string, and in the previous chapter we learned how to make Node.js behave as a file server. Let us combine the two, and serve the file requested by the client.

// Create two html files (1. summer.html 2. winter.html) and save them in the same folder as your node.js files.

// Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error:

// creating http, url & fs modules.
var http = require('http');
var url = require('url');
var fs = require('fs');

// creating server
http.createServer(function (req, res) {
    // parsing an address
    var q = url.parse(req.url, true);
    var fileName = "." + q.pathName;

    fs.readFile(fileName, function (err, data) {
        if (err) {
            res.writeHead(404, {
                'Content-Type': 'text/html'
            });
            return res.end("404 Not Found");
        }
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        return res.end();
    });
}).listen(8080);

// Remember to initiate the file:

// Initiate demo_fileserver.js: node demo_fileServer.js

// If you have followed the same steps on your computer, you should see two different results when opening these two addresses:

// http://localhost:8080/summer.html
// Will produce this result:
// Summer
// I love the sun!

// http://localhost:8080/winter.html
// Will produce this result:
// Winter
// I love the snow!