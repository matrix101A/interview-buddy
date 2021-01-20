const express = require("express");
const bodyParser = require("body-parser");

const questionRoutes = require("./routes/Question");
const app = express();

const Sequelize = require("sequelize");
const sequelize = require("./database");
const questionModel = require("./models/questions");
const reviewModel = require("./models/reviewed");

app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, X-Auth-Token"
  );
  next();
});

app.use("/", questionRoutes);

sequelize
  .sync()
  .then((res) => {
    console.log("success");
  })
  .catch((e) => console.log(e));

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}
app.listen(port);
