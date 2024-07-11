import jwt from "jsonwebtoken";

export const userAuth = (req, res, next) => {
  const token = req.header("token");
  console.log(token);
  jwt.verify(token, process.env.JWT_KEY, async function (err, decoded) {
    if (err) {
      res.json({ message: "token not valid", err });
    } else {
      console.log(decoded);
      req.Id = decoded.Id;
      next();
    }
  });
};
