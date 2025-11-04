var express = require('express');
const url = require('url')
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

const address = 'http://localhost:8080/default.htm?year=2024&month=october';
const urlObject = url.parse(address, true); // The 'true' argument parses the query string into an object

// console.log(urlObject.protocol); // Output: http:
// console.log(urlObject.host);     // Output: localhost:8080
// console.log(urlObject.hostname); // Output: localhost
// console.log(urlObject.port);     // Output: 8080
// console.log(urlObject.pathname); // Output: /default.htm
// console.log(urlObject.search);   // Output: ?year=2024&month=october
// console.log(urlObject.query);    // Output: { year: '2024', month: 'october' }
const fromURL = 'https://google.in/a/b'
console.log(url.resolve(fromURL,'/c/d'))