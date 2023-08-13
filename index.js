// A web Server is a software program which serves web pages to the web users (browser).

// The http.createServer() method includes request and response parameters which is supplied by the Node.js

// The request object can be used to get information about the current HTTP request.
// e.g. url, request header, and data

// The response object can be used to send response for a current HTTP request.

// If the response from the HTTP server is supposed to be displayed as HTML,
// you should include an HTTP header with the corect content type.

const http = require("http");


const server = http.createServer((req, res) =>{
    res.end("Hello from the other side")
})
        //port no., localhost, callback
server.listen(8000, "127.0.0.1", () =>{
    console.log("Listening to the port number 8000... ")
});