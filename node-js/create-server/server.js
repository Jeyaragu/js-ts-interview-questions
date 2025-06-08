var express = require('express');
var app = express();
var port = 3000;

app.get('/test', function (request, response) {
    response.send('Hello, world');
})

app.listen(port, function () {
    console.log('Express app listening on port ' + port);
});

// Another way to create server
/*
var http = require('http');
 var port = 3000;

 var requestHandler = function(request, response){
     console.log('Request came from: ' + request.url);
     response.end('Hello, World!');
 }

 var server = http.createServer(requestHandler);

 server.listen(port, function(){
     console.log('Listening on port ' + port);
 }); 
*/