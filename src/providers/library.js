const { Library } = require("../models");

const createLibrary = async (library) => {
  try {
    const newLibrary = await Library.create(library);
    return newLibrary;
  } catch (error) {
    console.log("error while create library", error);
    throw error;
  }
};

module.exports = { createLibrary };
