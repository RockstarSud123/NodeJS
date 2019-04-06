// The code tells the computer to write "Hello World!" if anyone (e.g. a web browser) tries to access your computer on port 8080.

var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end('Hello Newbies!');
}).listen(8080);

// The file you have just created must be initiated by Node.js before any action can take place.

// Start your command line interface, write "node myfirst.js" and hit enter.

// Now, your computer works as a server!

// If anyone tries to access your computer on port 8080, they will get a "Hello World!" message in return!

// Start your internet browser, and type in the address: http://localhost:8080
