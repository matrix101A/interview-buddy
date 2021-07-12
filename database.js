const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "x2d99t7pdp0ghoj1",
  "xjz0phbndt68b2gv",
  "xa4rx6zcbmq74fw8",
  {
    dialect: "mysql",
    host: "z3iruaadbwo0iyfp.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  }
);

// const sequelize = new Sequelize("testing", "root", "Abhinavabhinav1", {
//   dialect: "mysql",
//   host: "127.0.0.1",
//   port: 3306,
// });

module.exports = sequelize;
