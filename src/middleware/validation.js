export const validation = (schema) => {
  return (req , res , next) => {
    let { error } = schema.validate(req.body, { abortEarly: false });
    if (!error) {
        next();
    } else {
      let message = error.details.map((x) => x.message).join(", ");
      res.json({ message });
    }
  };
};
