const { bookProvider } = require("../providers");

const createBook = async (book) => await bookProvider.createBook(book);
module.exports = { createBook };
