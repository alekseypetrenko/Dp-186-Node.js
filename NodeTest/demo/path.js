const path = require("path");

console.log("File name is : ", path.basename(__filename));
console.log("Dir name is : ", path.dirname(__filename));

console.log("File extension is : ", path.extname(__filename));
console.log("Parse: ", path.parse(__filename).name);

console.log(path.join(__dirname, "server", "index.html"));
