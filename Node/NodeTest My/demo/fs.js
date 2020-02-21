// file system
const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, "test"), (err) => {
//     if(err){
//         throw err;
//     }
//     console.log("Folder is created");
// })

const filePath = path.join(__dirname, "test", "text.txt");

// writeFile -> totally rewrite current file
// fs.writeFile(filePath, "Hello Node from text.txt", err=> {
//     if(err){
//         throw err;
//     } else {
//         console.log("File is created");
        
//     }
// })

// fs.appendFile(filePath, "\nAnother line, appended", err => {
//     if(err){
//         throw err;
//     } else {
//         console.log("some info is added");
        
//     }


fs.readFile(filePath, "utf-8", (err, content) => {
    if(err){
        console.log(err);
         
    } 
    //const data = Buffer.from(content)
    //console.log("Content: ", data.toString());
    console.log("Content with UTF-8", content);
})