const Sequelize = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = requere("/users/users.routes")


//testapp - DB name
// root - login/password
// dialect - sequelize must to understand what excatly DB works here (in our case postgres)
const sequelize = new Sequelize('testapp', 'root', 'root', {
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
});

const app = express();

sequelize
    .authenticate()
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

app.use(bodyParser.json());

//app.use - receive middleware functions
app.use((req, res, next)=>{
    console.log("Any request");
    next();
    
})

app.use("/users", usersRouter)

app.listen(3002, () => console.log('Server is started'));