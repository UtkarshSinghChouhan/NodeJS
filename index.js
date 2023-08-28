// Reading from a Stream
// Create a Readable Stream
// Handle Stream events --> data, end, error and finish



// THIS IS THE OLD WAY OF READING THE DATA
const fs = require("fs")
const http = require("http")


const server = http.createServer();

server.on("request", (req, res) => {


    // THIS IS THE OLD WAY OF READING THE DATA VIA THE SERVER

        // var fs = require("fs");
        // fs.readFile("./input.txt", (err, data) => err ? console.log(err) : res.end(data));



    // THIS IS THE NEW WAY OF READING THE DATA VIA THE SERVER THROUGH STREAMING


        // const rstr = fs.createReadStream("./input.txt")  // First create a readeable stream
        // rstr.on("data", (chunkData) => {
        //     res.write(chunkData)
        // })

        // rstr.on("end", () => {
        //     res.end();
        // })

        // rstr.on("error", (err) => {
        //     console.log(err);
        //     res.end("File not found");
        // })

    // THIRD WAY 
        const rstr = fs.createReadStream("./input.txt")
        rstr.pipe(res);
})

server.listen(8000, "127.0.0.1")

