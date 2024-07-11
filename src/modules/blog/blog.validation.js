import Joi from "joi";

const addBlogSchema = Joi.object({
  titel: Joi.string().required(),
  desc: Joi.string().required(),
  createdBy: Joi.string().hex().length(24),
});

export { addBlogSchema };
