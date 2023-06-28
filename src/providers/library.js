const { Library, Book } = require("../models");

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
    // busca un libro por id
    const library = await Library.findByPk(id, { include: { all: true } });
    return library;
  } catch (error) {
    console.log("error looking for the library", error);
  }
};

const getLibraries = async () => {
  try {
    const libraries = await Library.findAll({
      // va a incluir los libros que pertenezcan a la respectiva libreria
      include: [{
        model: Book
      }]
    });
    return libraries;
  } catch (error) {
    console.log("error looking for all libraries", error);
  }
};

const updateLibrary = async (libraryId, data) => {
  try {
    // busca un libro por id reutilizando el metodo getLibrary() y actualiza con la informacion proveniente del req.body
    const library = await getLibrary(libraryId);
    if (library) {
      const updatedLibrary = await library.update(data);
      return updatedLibrary;
    }
    return null;
  } catch (error) {
    console.log("error updating the library", error);
    throw error;
  }
};

const deleteLibrary = async (libraryId) => {
  try {
    // busca una libreria por id y realiza el soft-delete en caso de que exista
    const library = await getLibrary(libraryId);
    if (library) {
      // como el modelo library es Paranoid podemos usar destroy() pero no se borraran los datos
      await library.destroy();
    }
  } catch (error) {
    console.error("error deleting the library", error);
    throw error;
  }
};

module.exports = { createLibrary, getLibrary, getLibraries, updateLibrary, deleteLibrary };
