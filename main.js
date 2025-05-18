var http = require('http');

http.createServer(function (req, res) {
//send the HTTP header
// HTTP Status: 200 : OK
// Content Type: text/plain
res.writeHead(200, {'content-type' : 'text/plain'});
//send the response body as "Hello World"
res.end('Hello World\n');
}).listen(8081);
//Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
// To run this code, save it in a file named main.js and run the following command in your terminal:node main.js
