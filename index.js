// Challenge

// 1. Create a folder named "Utkarsh"
// 2. Create a file in it names bio.txt and data into in.
// 3. Add more data into the file at the end of the existing data.
// 4. Read the data without getting the buffer data at first.
// 5. Rename the file name to mybio.txt
// 6. Now delete both the files and the folder

const fs = require('fs');


// fs.mkdirSync("Utkarsh")

// fs.writeFileSync("./Utkarsh/bio.txt", "My name is utkarsh Singh CHouha");

// fs.appendFileSync("./Utkarsh/bio.txt", "I have done my post hraduation")


// const data = fs.readFileSync("./Utkarsh/bio.txt");
// console.log(data);   //it will return the buffer data


// const data = fs.readFileSync("./Utkarsh/bio.txt", "utf8");
// console.log(data);


// fs.renameSync("./Utkarsh/bio.txt", "./Utkarsh/newFolder")

// fs.unlinkSync("./Utkarsh/newFolder")            //we can delet file as well as the folder using the "unlink" command
fs.rmdirSync("./Utkarsh")

