const bioData = {
    name : "Utkarsh",
    age : 24,
    status : "unemployed"
}

// Challenge
// 1. Convert the above object into the JSON format.
// 2. Add this JSON data in tot he another file using the NodeJS core FS-module.
// 3. read that file.
// 4. now convert the data back to the object.
// 5. Finally log the data into the console.

const jsonData = JSON.stringify(bioData);

const fs = require("fs");

// fs.writeFile("file.json", jsonData, (err) => err ? console.log(err) : console.log("data added to the file"));

fs.readFile("file.json", "utf-8", (err, data) => {
    console.log(data)
    console.log(JSON.parse(data))
})

