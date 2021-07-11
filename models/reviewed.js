const Sequelize = require("sequelize");
const sequelize = require("../database");

const reviewModel = sequelize.define(
  "reviewed",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
  },
  { timestamps: false }
);

module.exports = reviewModel;
