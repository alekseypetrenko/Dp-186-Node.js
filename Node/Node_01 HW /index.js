const http = require("http");
const fs = require("fs");
const path = require("path");
const idGenerator = require("uuid")


const server = http.createServer((req, res) => {
    if (req.method == "POST") {
        
    }
})

const PORT = process.env.port || 3000;
server.listen(PORT, () => {
    console.log(`Server has been started at ${PORT} port...`);

}) 