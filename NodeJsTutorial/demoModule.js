var http = require('http');
var dt = require('./myFirstModule');

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8080);

// Notice that we use ./ to locate the module, that means that the module is located in the same folder as the Node.js file.
// Save the code above in a file called "demo_module.js", and initiate the file: node demo_module.js
// If you have followed the same steps on your computer, you will see the same result as the example: http://localhost:8080