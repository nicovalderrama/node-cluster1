const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite"
});

const initializeDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("conexion exitosa");
    await sequelize.sync({ force: false });
  } catch (error) {
    console.log("error at db inicialization", error);
  }
};

module.exports = { sequelize, initializeDB };
