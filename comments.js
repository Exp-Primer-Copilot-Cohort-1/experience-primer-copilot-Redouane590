// create web server
const http = require('http');

// create web server
http.createServer((req, res) => {
    // set response HTTP header with HTTP status and Content type
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // send the response body "Hello World"
    res.end('Hello World\n');
}).listen(8081);

// print URL for accessing server
console.log('Server running at http://:8081/');