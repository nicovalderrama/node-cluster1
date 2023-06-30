const { User } = require("../models");

const createUser = async (user) => {
  try {
    const newUser = await User.create(user);
    return newUser;
  } catch (error) {
    console.error("error creating user", error);
    throw error;
  }
};

const authUser = async (name, password) => {
  try {
    const user = await User.findOne({ where: { name, password } });
    return user;
  } catch (error) {
    console.error("error authenticating user", error);
    throw error;
  }
};

const updateUser = async (id, user) => {
  try {
    const updatedUser = await User.update(user, { where: { id } });
    return updatedUser;
  } catch (error) {
    console.error("error updating user", error);
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const deletedUser = await User.destroy({ where: { id } });
    return deletedUser;
  } catch (error) {
    console.error("error deleting user", error);
    throw error;
  }
};

module.exports = { createUser, authUser, updateUser, deleteUser };
