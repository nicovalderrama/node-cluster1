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

const updateBook = async (req, res) => {
  try {
    const update = await bookServices.updateBook(req.params.id, req.body);
    res.json(update);
  } catch (error) {
    res.status(500).json({ action: "updateBook", error: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    await bookServices.deleteBook(req.params.id);
    res.send("book deleted!");
  } catch (error) {
    res.status(500).json({ action: "deleteBook", error: error.message });
  }
};
module.exports = { createBook, getBook, getAllBooks, updateBook, deleteBook };
