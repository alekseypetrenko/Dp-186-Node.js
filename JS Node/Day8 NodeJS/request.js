const axios = require("axios");

axios.post("http://localhost:3000", {name: "Alex"})
    .then(res => console.log(res.data))