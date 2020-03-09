//const Sequelize = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require("./users/users.router")


//testapp - DB name
// root - login/password
// dialect - sequelize must to understand what excatly DB works here (in our case postgres)
// const sequelize = new Sequelize('testapp', 'root', 'root', {
//     host: '127.0.0.1',
//     port: 5432,
//     dialect: 'postgres',
// });

const app = express();

// sequelize
//     .authenticate()
//     .then(() => console.log('DB connected'))
//     .catch(err => console.log(err));

app.use(bodyParser.json());

//app.use - receive middleware functions
// app.use((req, res, next)=>{
//     console.log("Any request");
//     next();
    
// })

app.use("/users", usersRouter);





app.put("/cats/:id/accounts/:accId", (req, res, next) =>{
    console.log("params", req.params);
    // res.send({
    //     params: req.params,
    //     queryObject: req.query,
    //     body: req.body,
    //     headers: req.headers,
    // });
    res.statusCode = 200;
    res.setHeader("User", "Some user");
    res.json({
        params: req.params,
        queryObject: req.query,
        body: req.body,
        headers: req.headers,
    });
})

// app.put("/users/:id", (req, res, next) =>{
//     console.log("HTTP method", req.method);
//     req.table = "some table";
//     next({name: "some"});
    
// })


// (req, res, next) =>{
//     console.log(req.table);
//     res.send("Helloqwe")
// }

// , (err, req, res, next) => {
//     console.log("some err first", err);
//     // need to pass err in the next
//     next(err);
    
// }, (err, req, res, next) => {
//     console.log("some err second", err);
//     res.send(err);
// });

app.listen(3002, () => console.log('Server is started'));