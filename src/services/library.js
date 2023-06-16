const { libraryProvider } = require("../providers");

const createLibrary = async (library) => await libraryProvider.createLibrary(library);
const getLibrary = async (id) => {
  const library = await libraryProvider.getLibrary(id);
  if (library) {
    console.log(library.name);
  }
  return library;
};
const getLibraries = async () => await libraryProvider.getLibraries();
module.exports = { createLibrary, getLibrary, getLibraries };
