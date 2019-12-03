const Joi = require("@hapi/joi");

//register validation
const leadValidation = data => {
  const schema = Joi.object({
    name: Joi.string()
      .min(6)
      .required(),
    lead_ref: Joi.string()
      .min(6)
      .required(),
    salesperson: Joi.string()
      .min(6)
      .required(),
    customer: Joi.String()
      .min(3)
      .required(),
    destination: Joi.String()
      .min(3)
      .required(),
    date_from: Joi.date()
      .min(6)
      .require(),
    date_to: Joi.date()
      .min(6)
      .required(),
    adults: Joi.number().required()
  });
  return schema.validate(data);
};

module.exports.leadValidation = leadValidation;
