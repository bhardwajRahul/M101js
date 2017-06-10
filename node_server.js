/**
 * Created by rahul on 10/6/17.
 */
var http = require('http');

var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("My first Node server");
});

server.listen(8000);

console.log("Server is up and running at http://127.0.0.1:8000/");