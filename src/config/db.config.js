const { Sequelize } = require("sequelize");

// instancia de sequelize
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite"
});

const initializeDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    const { User } = require("../models");
    const admin = await User.findOne({ where: { name: "admin" } });
    if (!admin) {
      await User.create({
        name: "admin",
        password: "admin"
      });
      console.log("admin created");
    } else {
      console.log("admin already exists");
    }
  } catch (error) {
    console.log("error at db inicialization", error);
  }
};

module.exports = { sequelize, initializeDB };
