const { bookProvider } = require("../providers");

const createBook = async (book) => await bookProvider.createBook(book);
const getBook = async (bookId) => await bookProvider.getBook(bookId);
const getAllBooks = async () => await bookProvider.getAllBooks();
const updateBook = async (bookId, data) => await bookProvider.updateBook(bookId, data);
const deleteBook = async (bookId) => await bookProvider.deleteBook(bookId);
module.exports = { createBook, getBook, getAllBooks, updateBook, deleteBook };
