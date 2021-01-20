const Sequelize = require("sequelize");

const sequelize = new Sequelize("questions", "root", "Abhinavabhinav1", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
