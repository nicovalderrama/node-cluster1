const { bookProvider } = require("../providers");

const createBook = async (book) => await bookProvider.createBook(book);
const getBook = async (bookId) => await bookProvider.getBook(bookId);
const getAllBooks = async () => await bookProvider.getAllBooks();
module.exports = { createBook, getBook, getAllBooks };
