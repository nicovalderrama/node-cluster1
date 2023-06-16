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

const getLibrary = async (id) => {
  try {
    const library = await Library.findByPk(id, { include: { all: true } });
    return library;
  } catch (error) {
    console.log("error looking for the library", error);
  }
};

const getLibraries = async () => {
  try {
    const libraries = await Library.findAll();
    return libraries;
  } catch (error) {
    console.log("error looking for all libraries", error);
  }
};
module.exports = { createLibrary, getLibrary, getLibraries };
