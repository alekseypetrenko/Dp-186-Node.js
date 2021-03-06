const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

const users = [];

app.use(express.json())

app.get("/users", (req, res) =>{
    res.json(users);
})

app.post("/users", async (req, res) =>{
    try {     
        //const salt = await bcrypt.genSalt  ();
        const hashedPass = await bcrypt.hash(req.body.pass, 10);
        const user = {
            name: req.body.name,
            pass: hashedPass
        }
        users.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send();
    }
})

app.post("/users/login", async (req, res) => {
    const user = users.find(user => user = req.body.pass)
    if(user === null){
        return res.status(400).send("Cannot find user")
    }
    try {
        if (await bcrypt.compare(req.body.pass, user.pass)){           
            res.send("Success")
        } else {
            res.send("Not Allowed")
        }
    } catch {
        res.status(500).send();
    }
})

app.listen(3000);