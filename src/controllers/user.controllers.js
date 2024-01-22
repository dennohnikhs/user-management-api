const userService = require("../services/user.service");
const { StatusCodes } = require("http-status-codes");

const STATUS = {
  success: true,
  failure: false,
};

const getAllUsers = (req, res) => {
  const users = userService.getAllUsers();
  if (users.length === 0) {
    return res.status(StatusCodes.NOT_FOUND).send({
      status: STATUS.failure,
      message: "No users was found",
    });
  }
  return res.status(StatusCodes.OK).send({
    status: STATUS.success,
    users: users,
  });
};
const getOneUser = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = userService.getOneUser(id);

  if (user) {
    return res.status(StatusCodes.OK).send(user);
  } else {
    return res.status(StatusCodes.NOT_FOUND).send({
      status: STATUS.failure,
      message: `No user with id ${id} was found`,
    });
  }
};

const addUser = async (req, res) => {
  try {
    const details = req.body;

    const addedUser = await userService.addUser(details);

    return res.status(StatusCodes.CREATED).send({
      status: "success",
      message: "User added successfully",
      user: addedUser,
    });
  } catch (error) {
    console.error("Error adding user:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      status: "error",
      error: "Internal Server Error",
    });
  }
};
const updateUser = (req, res) => {
  const { body: user } = req;

  const id = parseInt(req.params.id, 10);
  const checkIfUserExists = userService.getOneUser(id);
  if (!checkIfUserExists) {
    return res.status(StatusCodes.NOT_FOUND).send({
      status: STATUS.failure,
      message: `user with id ${id} not found`,
    });
  }
  userService.updateUser(id, user);
  return res.status(StatusCodes.OK).send({
    status: STATUS.success,
    message: "user updated successfully",
    user: user,
  });
};
const removeUser = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const checkIfUserExists = userService.getOneUser(id);
  if (!checkIfUserExists) {
    return res.status(StatusCodes.NOT_FOUND).send({
      status: STATUS.failure,
      message: `user with id ${id} not found`,
    });
  } else {
    userService.deleteUser(id);
    return res.status(StatusCodes.OK).send({
      status: STATUS.success,
      message: `user with id ${id} deleted successfully`,
    });
  }
};
module.exports = {
  getAllUsers,
  getOneUser,
  addUser,
  updateUser,
  removeUser,
};
