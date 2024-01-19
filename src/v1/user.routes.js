const express = require("express");
const { expressYupMiddleware } = require("express-yup-middleware");
const { StatusCodes } = require("http-status-codes");
const {
  addUserSchema,
  updateUserSchema,
  getOneUserSchema,
  removeUserSchema,
} = require("./user.schema");
const userControllers = require("../controllers/user.controllers");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(StatusCodes.ACCEPTED).send("server is up and started");
});
router.get("/all", userControllers.getAllUsers);
router.get(
  "/:id",
  expressYupMiddleware({
    schemaValidator: getOneUserSchema,
    expectedStatusCode: StatusCodes.ACCEPTED,
  }),
  userControllers.getOneUser
);
router.post(
  "/add",
  expressYupMiddleware({
    schemaValidator: addUserSchema,
    expectedStatusCode: StatusCodes.BAD_REQUEST,
  }),
  userControllers.addUser
);
router.put(
  "/:id",
  expressYupMiddleware({
    schemaValidator: updateUserSchema,
  }),
  userControllers.updateUser
);
router.delete(
  "/:id",
  expressYupMiddleware({
    schemaValidator: removeUserSchema,
    expectedStatusCode: StatusCodes.BAD_REQUEST,
  }),
  userControllers.removeUser
);
module.exports = router;
