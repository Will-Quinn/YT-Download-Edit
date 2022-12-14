//packages
const express = require("express");
const fetch = require("node-fetch");
require("dotenv").config();

//initialising express server
const app = express();

//creating server port number
const PORT = process.env.PORT || 3000;

//set template engine
app.set("view engine", "ejs");
app.use(express.static("public"));

//this code parses the html data for POST requests
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {});

//starting the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
