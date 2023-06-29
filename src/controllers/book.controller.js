const { bookServices } = require("../services");

const createBook = async (req, res) => {
  try {
    const newBook = await bookServices.createBook(req.body);
    res.json(newBook);
  } catch (error) {
    res.status(500).json({ action: "createBook", error: error.message });
  }
};

const getBook = async (req, res) => {
  try {
    const book = await bookServices.getBook(req.params.id);
    res.json(book);
  } catch (error) {
    res.status(500).json({ action: "getBook", error: error.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await bookServices.getAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ action: "getAllBooks", error: error.message });
  }
};
module.exports = { createBook, getBook, getAllBooks };
