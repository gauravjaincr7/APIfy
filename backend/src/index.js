const express = require("express");
//methods and functions to create mongodb models
const mongoose = require("mongoose")
const dotenev = require("dotenv");

//load functions from dotenv to main file
dotenev.config();
const app = express();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to mongoDB database");
  })
  .catch((err) => {
    console.log("Error connecting to databse: " + err);
  });

//get route take 2 params -> routename, function
//get, post, put, delete, patch (week2-> route creation)
app.get("/hello-world", (req,res) => {
    res.send("HELLO WORLD");
});

app.listen(process.env.PORT, () => {
    console.log("Backend sever has started: " + process.env.PORT);
});
