// const chalk = require("chalk");
// const text = require("./data")
// console.log(chalk.blue("Hello NodeJS"));
// console.log(chalk.red(text));
// console.log(chalk);
// console.log(__dirname, __filename);

const http = require("http");
const path = require("path");
const fs = require("fs")

const server = http.createServer((req, res) => {
    // if(req.url === "/"){
    //     fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
    //         if (err){
    //             throw err;
    //         }
    //         res.writeHead(200, {
    //             "Content-Type" : "text/html"
    //         })
    //         res.end(data)
    //     })
    // }    
    // if(req.url === "/contact"){
    //     fs.readFile(path.join(__dirname, "public", "contact.html"), (err, data) => {
    //         if (err){
    //             throw err;
    //         }
    //         res.writeHead(200, {
    //             "Content-Type" : "text/html"
    //         })
    //         res.end(data)
    //     })
    // }
let filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);
let contentType = "text/html";

let ext = path.extname(filePath);

if(!ext) {
    filePath+=".html"
}

switch(ext){
    case ".css":
        contentType = "text/css";
        break;
    case ".js":
        contentType = "text/javasript";
        break;
    default:
        contentType = "text/html";
}

fs.readFile(filePath, (err, content) => {
    if(err){
        fs.readFile(path.join(__dirname, "public", "error.html"), (err, data) => {
            if(err){
                res.writeHead(500);
                res.end();
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/html",
                })
                res.end(data);
            }
        })
    } else {           
        res.writeHead(200, {
            "Content-Type": contentType
        })
        res.end(content);
    }
})
})

const PORT = process.env.PORT || 3000
server.listen(3000, () => {
    console.log(`Server has been started on ${PORT} PORT ...`);
    
})