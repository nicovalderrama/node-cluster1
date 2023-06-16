const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db.config");

const Book = sequelize.define("Books", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  isbn: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false
  },
  library: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = { Book };
