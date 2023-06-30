const { userProvider } = require("../providers");

const createUser = async (user) => userProvider.createUser(user);
const authUser = async (name, password) => userProvider.authUser(name, password);

module.exports = { createUser, authUser };
