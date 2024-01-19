const express = require("express");
const { StatusCodes } = require("http-status-codes");

const userService = require("../services/user.service");
const router = express.Router();

const STATUS = {
  success: "OK",
  failure: "NO",
};
router.get("/", (req, res) => {
  res.status(StatusCodes.OK);
  res.send("api is up and started");
});
router.get("/all", (req, res) => {
  const users = userService.getAllUsers();

  res.status(StatusCodes.OK).send({
    status: STATUS.success,
    message: users,
  });
});
router.get("/get/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = userService.getUser(id);

  if (!user) {
    return res.status(StatusCodes.NOT_FOUND).send({
      status: STATUS.failure,
      message: `No user with ${id} found`,
    });
  } else {
    return res.status(StatusCodes.OK).send({
      status: STATUS.success,
      message: user,
    });
  }
});
router.post("/add", (req, res) => {
  //add alias to the body object to represent whatever data what you want
  const { body: user } = req;

  if (!user.name) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      status: STATUS.failure,
      message: "name is required",
    });
  }
  const addedUser = userService.addUser(user);

  return res.status(StatusCodes.CREATED).send({
    status: STATUS.success,
    message: addedUser,
  });
});
router.put("/update/:id", (req, res) => {
  const { body: user } = req;

  const id = parseInt(req.params.id, user);

  if (!user.name) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      status: STATUS.failure,
      message: "name is required",
    });
  }
  const updatedUser = userService.updateUser(id, user);
  if (updatedUser) {
    return res.status(StatusCodes.OK).send({
      status: STATUS.success,
      message: updatedUser,
    });
  } else {
    return res.status(StatusCodes.NOT_FOUND).send({
      status: STATUS.failure,
      message: `user ${id} is not found`,
    });
  }
});

module.exports = router;
