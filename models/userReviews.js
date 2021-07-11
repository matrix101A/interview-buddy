const Sequelize = require("sequelize");
const sequelize = require("../database");

const reviewModel = sequelize.define("userReviews", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
});

module.exports = reviewModel;
