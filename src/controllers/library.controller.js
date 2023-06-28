const { libraryServices } = require("../services");

const createLibrary = async (req, res) => {
  try {
    const newLibrary = await libraryServices.createLibrary(req.body);
    res.json(newLibrary);
  } catch (err) {
    res.status(500).json({ action: "createLibrary", error: err.message });
  }
};

const getLibraryController = async (req, res) => {
  try {
    const getLibrary = await libraryServices.getLibrary(req.params.id);
    res.json(getLibrary);
  } catch (error) {
    res.status(500).json({ action: "getLibraries", error: error.message });
  }
};

const getLibrariesController = async (req, res) => {
  try {
    const libraries = await libraryServices.getLibraries();
    res.json(libraries);
  } catch (error) {
    res.status(400).json({ action: "getLibraries", error: error.message });
  }
};

const updateLibraryController = async (req, res) => {
  try {
    const updateLibrary = await libraryServices.updateLibrary(req.params.id, req.body);
    res.json(updateLibrary);
  } catch (error) {
    res.status(500).json({ action: "updateLibrary", error: error.message });
  }
};

const deleteLibraryController = async (req, res) => {
  try {
    await libraryServices.deleteLibrary(req.params.id);
    res.send("deleted");
  } catch (error) {
    res.status(500).json({ action: "deleteLibrary", error: error.message });
  }
};

module.exports = { createLibrary, getLibraryController, getLibrariesController, updateLibraryController, deleteLibraryController };
