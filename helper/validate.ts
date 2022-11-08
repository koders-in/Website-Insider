import Joi from "joi";

export const validateApplyForJobDetails = (data: object) => {
  const schema = Joi.object({
    fname: {
      value: Joi.string()
        .alphanum()
        .min(1)
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
        .min(1)
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
        })
        .required(),
      error: Joi.optional(),
    },
    resume: Joi.optional(),
  });
  return schema.validate(data);
};
