const { libraryProvider } = require("../providers");

const createLibrary = async (library) => await libraryProvider.createLibrary(library);

module.exports = { createLibrary };
