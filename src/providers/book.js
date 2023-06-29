const { Book, Library } = require("../models");

const createBook = async (book) => {
  try {
    const newBook = await Book.create(book);
    return newBook;
  } catch (error) {
    console.error("error creating new book", error);
    throw error;
  }
};

const getBook = async (bookId) => {
  try {
    const book = await Book.findByPk(bookId, {
      include: [{
        model: Library
      }]
    });
    if (book) {
      return book;
    }
    return null;
  } catch (error) {
    console.error("error searching for the book", error);
    throw error;
  }
};

const getAllBooks = async () => {
  try {
    const books = await Book.findAll({
      include: [{
        model: Library
      }],
    });
    return books;
  } catch (error) {
    console.error("error looking for the books", error);
    throw error;
  }
};

const updateBook = async (bookId, data) => {
  try {
    const book = await getBook(bookId);
    if (book) {
      return book.update(data);
    }
    return null;
  } catch (error) {
    console.error("error updating the book", error);
    throw error;
  }
};

const deleteBook = async (bookId) => {
  try {
    const book = await getBook(bookId);
    if (book) {
      await book.destroy();
    }
    return null;
  } catch (error) {
    console.error("error deleting the book", error);
    throw error;
  }
};
module.exports = { createBook, getBook, getAllBooks, updateBook, deleteBook };
