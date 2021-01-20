const Sequelize = require("sequelize");
const sequelize = require("../database");

const questionModel = sequelize.define(
  "questions",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    question: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    solution: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = questionModel;
