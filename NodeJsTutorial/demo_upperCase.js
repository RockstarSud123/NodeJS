// // Node.js NPM
// // ===============

// // What is NPM?
// // -------------
// // NPM is a package manager for Node.js packages, or modules if you like.

// // www.npmjs.com hosts thousands of free packages to download and use.

// // The NPM program is installed on your computer when you install Node.js

// // What is a Package?
// // --------------------
// // A package in Node.js contains all the files you need for a module.

// // Modules are JavaScript libraries you can include in your project.

// // Download a Package
// // --------------------
// // Downloading a package is very easy.

// // Open the command line interface and tell NPM to download the package you want.

// // I want to download a package called "upper-case":

// // Download "upper-case": npm install upper-case

// // Now you have downloaded and installed your first package!

// // NPM creates a folder named "node_modules", where the package will be placed. All packages you install in the future will be placed in this folder.

// // Using a Package
// // ---------------

// // Once the package is installed, it is ready to use.

// // Include the "upper-case" package the same way you include any other module:

// var uc = require('uppercase');

// // Create a Node.js file that will convert the output "Hello World!" into upper-case letters:

var http = require('http');
var uc = require('upper-case');

http.createServer(function(req, res){
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write(uc('Hello World!'));
    res.end();
}).listen(8080);

// Save the code above in a file called "demo_uppercase.js", and initiate the file: node demo_uppercase.js 

// If you have followed the same steps on your computer, you will see the same result as the example: http://localhost:8080