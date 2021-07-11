const Sequelize = require("sequelize");
const sequelize = require("../database");

const userModel = sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.STRING(100),
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING(5000),
      allowNull: true,
    },

    email: {
      type: Sequelize.STRING(5000),
      allowNull: true,
    },
  },
  { timestamps: true }
);

module.exports = userModel;
