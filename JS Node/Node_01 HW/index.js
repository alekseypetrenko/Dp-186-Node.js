
const http = require("http");
const path = require("path");
const fs = require("fs")
const idGenerator = require("uuid");

const server = http.createServer((req, res) => {
    let data = "";

    const filePath = path.join(__dirname, "tasks", `${idGenerator.v4()}.txt`);
    if (req.method === "POST") {
        req.on("data", chunk => {
            data += chunk.toString();
            // writeFile -> totally rewrite current file
            // appendFile -> appends to current file
            fs.writeFile(filePath, data, err => {
                if (err) {
                    throw err;
                } else {
                    console.log(`${idGenerator.v4()}.txt is added corectly`);
                }
            });
        });
        req.on("end", () => {
            res.end(data)
        })
    }
    if (req.method === "GET") {
        let arr = [];
        const tasks = path.join(__dirname, "tasks")
        fs.readdir(tasks, (err, files) => {
            if (err) {
                throw err
            }
            files.forEach((file, i) => {
                // Почему внутри forEach для readFile нужно указать полный путь
                // path.join(__dirname, "tasks", file, а не просто file
                fs.readFile(path.join(__dirname, "tasks", file), "utf8", (err, data) => {
                    arr.push(data);
                    // в консоль выводит инфу с файлов
                    if (files.length - 1 === i) {
                        res.end(JSON.stringify(arr));
                    }
                })

            });
        })
        req.on("end", () => {
            res.end(arr)
        })
    }
})


const PORT = process.env.port || 3000;
server.listen(PORT, () => {
    console.log(`Server has been started on ${PORT} PORT ...`);
})