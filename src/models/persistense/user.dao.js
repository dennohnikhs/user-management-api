const users = require("../data/users.data");

const getAll = () => {
  return users;
};
const insertUser = (details) => {
  const newUser = { ...details,  id: users.length + 1 };
  users.push(newUser);
  return newUser;
};
const getOneUser = (userId) => {
  const foundUser = users.find((user) => {
    //remove the array element of the found user
    if (user.id === userId) {
      return user;
    }
    return null;
  });
  return foundUser;
};
const updateUser = (userId, newDetails) => {
  //find the index of the user you want to delete using findIndex method
  const indexOfUserToUpdate = users.findIndex((user) => user.id === userId);

  const updatedUser = {
    ...users[indexOfUserToUpdate],
    ...newDetails,
  };
  users.splice(indexOfUserToUpdate, 1, updatedUser);
  return updateUser;
};
const removeUser = (userId) => {
  // Find the index of the user to be removed using the findIndex method
  // ? optional chaining is used to access deeply nested properties of an object without checking if each property in the chain exists
  const indexOfUserToDelete = users.findIndex((user) => user?.id === userId);

  if (indexOfUserToDelete) {
    // Remove the user from the array
    users.splice(indexOfUserToDelete, 1);
  }
};

module.exports = {
  insertUser,
  getOneUser,
  getAll,
  updateUser,
  removeUser,
};
