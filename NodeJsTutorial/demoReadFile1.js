// // Node.js as a File Server

// // The Node.js file system module allows you to work with the file system on your computer.

// // To include the File System module, use the require() method:

// // Common use for the File System module:

// //     Read files
// //     Create files
// //     Update files
// //     Delete files
// //     Rename files

// // Create a Node.js file that reads the HTML file, and return the content:

// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res){
//     fs.readFile('demoFile1.html', function(err, data){
//         res.writeHead(200, {
//             'Content-Type': 'text/html'
//         });
//         res.write(data);
//         res.end();
//     });
// }).listen(8080);

// // Initiate demo_readfile.js: node demo_readfile.js 

// // If you have followed the same steps on your computer, you will see the same result as the example: http://localhost:8080

// // ----------------------------------------------------

// // Create Files
// // =============
// // The File System module has methods for creating new files:

// //     fs.appendFile()
// //     fs.open()
// //     fs.writeFile()

// // The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:

// // Create a new file using the appendFile() method:

// var fs = require('fs');

// fs.appendFile('myNewFile1.txt', 'Hello Newbies!', function(err){
//     if(err){
//         throw err;
//     }
//     console.log('Saved!');
// });

// // Initiate demo_readfile.js: node demo_readfile.js 

// // If you have followed the same steps on your computer, you will see the same result as the example: 
// // Saved!

// // ----------------------------------------------------

// // The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:

// // Create a new, empty file using the open() method:

// var fs = require('fs');

// fs.open('myNewFile2.txt', 'w', function(err, file){
//     if(err){
//         throw err;
//     }
//     console.log('Saved!');
// })

// // Initiate demo_readfile.js: node demo_readfile.js 

// // If you have followed the same steps on your computer, you will see the same result as the example: 
// // Saved!

// // ----------------------------------------------------

// The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:

// Create a new file using the writeFile() method:

// var fs = require('fs');

// fs.writeFile('myNewFile3.txt', 'Hello Content!', function(err){
//     if(err){
//         throw err;
//     }
//     console.log('Saved!');
// });

// // ----------------------------------------------------

// // Update Files
// //==============
// // The File System module has methods for updating files:

// //     fs.appendFile()
// //     fs.writeFile()

// // The fs.appendFile() method appends the specified content at the end of the specified file:

// // Append "This is my text." to the end of the file "mynewfile1.txt":

// var fs = require('fs');

// fs.appendFile('myNewFile1.txt', 'This is my Text.', function(err){
//     if(err){
//         throw err;
//     }
//     console.log('Updated!');
// });

// // ----------------------------------------------------

// // The fs.writeFile() method replaces the specified file and content:

// // Replace the content of the file "mynewfile3.txt":

// var fs = require('fs');

// fs.writeFile('myNewFile3.txt', 'This is my text.', function(err){
//     if(err){
//         throw err;
//     }
//     console.log('Replaced!');
// });

// // ----------------------------------------------------

// // Delete Files
// //===============
// // To delete a file with the File System module,  use the fs.unlink() method.

// // The fs.unlink() method deletes the specified file:

// var fs = require('fs');
// fs.unlink('myNewFile2.txt',function(err){
//     if(err){
//         throw err;
//     }
//     console.log('File Deleted!');
// });

// // ----------------------------------------------------

// // Rename Files
// //==============
// // To rename a file with the File System module,  use the fs.rename() method.

// // The fs.rename() method renames the specified file:

// // Rename "mynewfile1.txt" to "myrenamedfile.txt":

// var fs = require('fs');

// fs.rename('myNewFile1.txt', 'myRenamedFile1.txt', function(err){
//     if(err){
//         throw err;
//     }
//     console.log('File Renamed!');
// });