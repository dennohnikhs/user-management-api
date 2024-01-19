// const { object, string, number, date, InferType } = require("yup");
const yup = require("yup");
const MINIMUM_LENGTH = {
  name: 3,
  city: 3,
  country: 2,
  email: 5,
};
const MAXIMUM_LENGTH = {
  name: 200,
  city: 30,
  country: 20,
  email: 50,
};
const getOneUserSchema = {
  schema: {
    params: {
      yupSchema: yup.object().shape({
        id: yup.number().required(),
      }),
    },
  },
};
const addUserSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        name: yup
          .string()
          .min(MINIMUM_LENGTH.name)
          .max(MAXIMUM_LENGTH.name)
          .required(),
        email: yup
          .string()
          .email()
          .min(MINIMUM_LENGTH.email)
          .max(MAXIMUM_LENGTH.email),
        city: yup.string().min(MINIMUM_LENGTH.city).max(MAXIMUM_LENGTH.city),
        country: yup
          .string()
          .required()
          .min(MINIMUM_LENGTH.country)
          .max(MAXIMUM_LENGTH.country),
        gender: yup
          .string()
          .oneOf(["male", "female"], "Gender must be either male or female")
          .required(),
        profilePic: yup.string().required(),
      }),
    },
  },
};

const updateUserSchema = {
  schema: {
    params: {
      yupSchema: yup.object().shape({
        id: yup.number().required(),
      }),
    },
  },
  schema: {
    body: {
      yupSchema: yup.object().shape({
        name: yup
          .string()
          .min(MINIMUM_LENGTH.name)
          .max(MAXIMUM_LENGTH.name)
          .required(),
        email: yup
          .string()
          .email()
          .min(MINIMUM_LENGTH.email)
          .max(MAXIMUM_LENGTH.email),
        city: yup.string().min(MINIMUM_LENGTH.city).max(MAXIMUM_LENGTH.city),
        country: yup
          .string()
          .required()
          .min(MINIMUM_LENGTH.country)
          .max(MAXIMUM_LENGTH.country),
        gender: yup
          .string()
          .oneOf(["male", "female"], "Gender must be either male or female")
          .required(),
      }),
    },
  },
};
const removeUserSchema = {
  schema: {
    params: {
      yupSchema: yup.object().shape({
        id: yup.number().required(),
      }),
    },
  },
};
module.exports = {
  addUserSchema,
  getOneUserSchema,
  updateUserSchema,
  removeUserSchema,
};
