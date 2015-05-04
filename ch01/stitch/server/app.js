// First, we require Express.js as dependency
var express = require('express');
var path    = require('path');
var stitch  = require('stitch');


// To "stitch" the client-side modules together
    var package = stitch.createPackage({
        paths: [path.resolve(__dirname + '/../app')],
        dependencies: [
            __dirname + '/../libs/jquery-1.4.2.js',
            __dirname + '/../libs/underscore-1.3.3.js',
            __dirname + '/../libs/backbone-1.1.2.js',
        ]
    });

// initialize the application...
    var app = express();

// Mount static directory
    var pathStatic = path.resolve( __dirname + '/../static');
    app.use(express.static(pathStatic));

// Deliver content of stich package as vendor.js
    app.get('/client.js', package.createServer());

// We add a basic route that serves an index.html
app.get('/', function(req, res) {
    var html = path.resolve(__dirname + '/../index.html');
    res.sendFile(html);
});

app.listen(5000);
console.log("Server is running.");
