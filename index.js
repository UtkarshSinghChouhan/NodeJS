// Challenge

// 1. Create a folder named "Utkarsh"
// 2. Create a file in it name "file.txt" and add data into it
// 3. Add more data into the file at the end of the existing data.
// 4. Read the data without getting the buffer data at first.
// 5. Rename the file
// 6. Now delete both the file and the folder.

const fs = require("fs");

// fs.mkdir("./Utkarsh", err => console.log(`${err ? err : "Folder Created Successfully"}`));


// fs.writeFile("./Utkarsh/file.txt", "This is Utkarsh Singh Chouhan", err => console.log(`${err ? err : "File created Successfully"}`));


// fs.appendFile("./Utkarsh/file.txt", "THis is the data to be appended", err => console.log(`${err ? err : "Data appended successfully"}`));



// fs.readFile("./Utkarsh/file.txt", (err, data) => console.log(`${err ? err : data}`));


// fs.rename("./Utkarsh/file.txt", "./Utkarsh/abc.txt", err => console.log(`${err ? err : "file renamed successfully"}`));


// fs.unlink("./Utkarsh/abc.txt", err => console.log(`${err ? err : "file deleted successfully"}`));


// fs.rmdir("./Utkarsh", (err) => console.log(`${err ? err : "Folder deleted successfully"}`))



