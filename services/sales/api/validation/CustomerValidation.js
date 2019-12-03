const Joi = require("@hapi/joi");

//register validation
const customerValidation = data => {
  const schema = Joi.object({
    name: Joi.string()
      .min(6)
      .required(),
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    phone: Joi.number()
      .min(9)
      .required()
      .max(24),
    country: Joi.string()
      .min(3)
      .required(),
    leadsource: Joi.string()
      .min(3)
      .required()
  });
  return schema.validate(data);
};

module.exports.customerValidation = customerValidation;
