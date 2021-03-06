//jshint esversion:6
const express = require("express");
const app = express();

//connecting our DB
require('./utils/db');

//setting Body-Parser
const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// importing routes
const HomeRoute = require("./routes/home.route");
const AdminRoute = require("./routes/admin.route")

// static files
app.use(express.static(__dirname + "/public"));

// setting up view engine
app.set("view engine", "ejs");

// setting up routes
app.use("/", HomeRoute);
app.use("/admin", AdminRoute);

// server
app.listen(3000, () => {
  console.log("Running on port 3000!");
});
