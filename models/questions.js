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
      type: Sequelize.STRING(5000),
      allowNull: true,
    },

    solution: {
      type: Sequelize.STRING(5000),
      allowNull: true,
    },
    difficulty: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  { timestamps: false }
);

module.exports = questionModel;
