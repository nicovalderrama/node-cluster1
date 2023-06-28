const { Book } = require("../models");

const createBook = async (book) => {
  try {
    const newBook = await Book.create(book);
    return newBook;
  } catch (error) {
    console.error("error creating new book", error);
    throw error;
  }
};

module.exports = { createBook };
