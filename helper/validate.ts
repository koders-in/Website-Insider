import Joi from "joi";

import * as yup from "yup";
export const validateApplyForJobDetails = (data: object) => {
  const schema = Joi.object({
    fname: {
      value: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .messages({
          "string.empty": `First name cannot be an empty`,
          "any.required": `First name field is required`,
        })
        .required(),
      error: Joi.optional(),
    },
    lname: {
      value: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .messages({
          "string.empty": `Last name cannot be an empty`,
          "any.required": `Last name field is required`,
        })
        .required(),
      error: Joi.optional(),
    },
    email: {
      value: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      error: Joi.optional(),
    },
    mob: {
      value: Joi.string()
        .min(10)
        .max(11)
        .messages({
          "string.empty": `Mobile number cannot be an empty`,
          "any.required": `Mobile number field is required`,
          "mob.value": "Mobile number length must be 10",
        })
        .required(),
      error: Joi.optional(),
    },
    resume: Joi.optional(),
  });
  return schema.validate(data);
};

export const jobValidationSchema = yup.object().shape({
  fName: yup.string().required("First name is required"),
  lName: yup.string().required("First name is required"),
  email: yup.string().email().required("Email address is required"),
  mobile: yup.string().length(10).required("Mobiile number is Required"),
});
