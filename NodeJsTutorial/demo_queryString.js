// Split the Query String

// There are built-in modules to easily split the query string into readable parts, such as the URL module.

var http = require('http');
var url = require('url');

http.createServer(function(req, res){
    releaseEvents.writeHead(200, {
        'content-type': 'text/html'
    });

    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080);

// Save the code above in a file called "demo_querystring.js" and initiate the file:
// node demo_querystring.js 

// The address:

// http://localhost:8080/?year=2017&month=July

// Will produce this result:
// 2017 July