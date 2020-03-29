const path = require("path");
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");

const app = express();
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
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader('Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);


module.exports = app;