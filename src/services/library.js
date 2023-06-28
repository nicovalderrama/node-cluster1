const { libraryProvider } = require("../providers");

// crea una libreria
const createLibrary = async (library) => await libraryProvider.createLibrary(library);

// trae una libreria por id
const getLibrary = async (id) => {
  const library = await libraryProvider.getLibrary(id);
  if (library) {
    console.log(library.name);
  }
  return library;
};

// trae todas las librerias y sus respectivos libros
const getLibraries = async () => await libraryProvider.getLibraries();

// actualiza los datos de una libreria
const updateLibrary = async (libraryId, data) => await libraryProvider.updateLibrary(libraryId, data);

const deleteLibrary = async (libraryId) => await libraryProvider.deleteLibrary(libraryId);

module.exports = { createLibrary, getLibrary, getLibraries, updateLibrary, deleteLibrary };
