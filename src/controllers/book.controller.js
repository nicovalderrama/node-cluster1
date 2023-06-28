const { bookServices } = require("../services");

const createBook = async (req, res) => {
  try {
    const newBook = await bookServices.createBook(req.body);
    res.json(newBook);
  } catch (error) {
    res.status(500).json({ action: "createBook", error: error.message });
  }
};

module.exports = { createBook };
