const { userServices } = require("../services");
const jwt = require("jsonwebtoken");
const { SERVER_SECRET } = require("../middleware/auth-mdw");

const createUser = async (req, res) => {
  try {
    const newUser = await userServices.createUser(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(401).json({ action: "createUser", error: error.message });
  }
};

const authUser = async (req, res) => {
  try {
    const user = await userServices.authUser(req.body.name, req.body.password);
    // si el usuario existe y es admin, le damos un token de admin
    if (user && user.name === "admin" && user.password === "admin") {
      const token = jwt.sign({ name: user.name, role: "Admin" }, SERVER_SECRET);
      res.json({ token });
    } else if (user) {
      // si el usuario existe y no es admin, le damos un token de user
      const token = jwt.sign({ name: user.name, role: "User" }, SERVER_SECRET);
      res.json({ token });
    } else {
      // si el usuario no existe, devolvemos un error
      res.status(404).json({ action: "authUser", message: "User not found" });
    }
  } catch (error) {
    res.status(401).json({ action: "authUser", error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await userServices.updateUser(req.params.id, req.body);
    res.json(updatedUser);
  } catch (error) {
    res.status(401).json({ action: "updateUser", error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await userServices.deleteUser(req.params.id);
    res.json(deletedUser);
  } catch (error) {
    res.status(401).json({ action: "deleteUser", error: error.message });
  }
};

module.exports = { createUser, authUser, updateUser, deleteUser };
