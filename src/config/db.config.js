const { Sequelize } = require("sequelize");

// instancia de sequelize
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite"
});

const initializeDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("conexion exitosa");
    await sequelize.sync({ force: true });
  } catch (error) {
    console.log("error at db inicialization", error);
  }
};

module.exports = { sequelize, initializeDB };
