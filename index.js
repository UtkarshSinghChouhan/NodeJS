

const http = require("http");
const fs = require("fs");


const server = http.createServer((req, res) =>{
    const data = fs.readFileSync(`${__dirname}/api.json`, "utf-8");


    if(req.url == '/'){
        res.writeHead(200, {"Content-type" : "html"});
        res.write("<h1>This is the Home Page</h1>")
        res.end();
    }else if(req.url === "/api"){
        res.writeHead(200, {"Content-type" : "application/json"})
       
        res.write(data);
        

        res.end(data)
        
    }
    else{
        res.writeHead(404, {"Content-type" : "text/html"});
        res.write("<h1>404 error this page doen not exists</h1>")
        res.end();
    }
    

})
        //port no., localhost, callback 
server.listen(8000, "127.0.0.1", () =>{
    console.log("Listening to the port number 8000... ")
});