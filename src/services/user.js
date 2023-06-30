const { userProvider } = require("../providers");

const createUser = async (user) => userProvider.createUser(user);
const authUser = async (name, password) => userProvider.authUser(name, password);
const updateUser = async (id, user) => userProvider.updateUser(id, user);
const deleteUser = async (id) => userProvider.deleteUser(id);
module.exports = { createUser, authUser, updateUser, deleteUser };
