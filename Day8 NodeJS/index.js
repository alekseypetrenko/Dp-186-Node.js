const sum = require("./sum")
//console.log(sum(2,5));
const fs = require("fs")

const http = require("http");

const server = http.createServer((req, res)=>{
    
    // fs.readFile("./data.json", (err, data)=>{
    //     if(err){
    //         throw err;
    //     }
    //     res.end(data.toString("utf8"))
        
    // })

    let data = ""
    req.on("data", chunk => {
        data+=chunk.toString("utf8");
    })
    req.on("end", () => {
        res.end(data)        
    })
    
    
})

server.listen(3000, ()=>console.log("Started..."));

