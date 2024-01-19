const userDao = require("../models/persistense/user.dao");

const addUser = (details) => {
  const newUser = userDao.insertUser(details);
  if (!newUser) {
    return false;
  }
  return newUser;
};
const getOneUser = (userId) => {
  const foundUser = userDao.getOneUser(userId);

  if (foundUser) {
    return foundUser;
  }
};
const updateUser = (userId, details) => {
  userDao.updateUser(userId, details);
};
const deleteUser = (userId) => {
  userDao.removeUser(userId);
};
const getAllUsers = () => {
  const allUsers = userDao.getAll();
  if (allUsers) {
    return allUsers;
  } else {
    return false;
  }
};
module.exports = {
  addUser,
  getOneUser,
  updateUser,
  deleteUser,
  getAllUsers,
};
