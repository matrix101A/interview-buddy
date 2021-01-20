const express = require("express");
const bodyParser = require("body-parser");

const questionRoutes = require("./routes/Question");
const app = express();

const Sequelize = require("sequelize");
const sequelize = require("./database");
const questionModel = require("./models/questions");
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(questionRoutes);

sequelize
  .sync()
  .then((res) => {
    console.log("success");
  })
  .catch((e) => console.log(e));

app.listen(5000);
