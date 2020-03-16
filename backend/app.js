const expess = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postsRoutes = require("./routes/posts");

const app = expess();
mongoose.connect("mongodb+srv://tzibo:Qhu05uRpQbB2ngMk@cluster0-eo5fs.mongodb.net/node-angular?retryWrites=true&w=majority")
    .then(() => {
        console.log('Connected to databse!');
    })
    .catch(() => {
        console.log('Connection failed!');
    })
//mongoPass; Qhu05uRpQbB2ngMk
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.use("/api/posts", postsRoutes);


module.exports = app;