const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db.config");
const { Book } = require("./book");

const Library = sequelize.define("Libraries", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Library.hasMany(Book);
Book.belongsTo(Library);

module.exports = Library;
