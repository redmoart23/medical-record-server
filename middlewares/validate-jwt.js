const { response } = require("express");
const jwt = require("jsonwebtoken");

const validateJWT = (req, res = response, next) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      ok: false,
      message: "No token in the request",
    });
  }

  try {
    const { uid, name, title } = jwt.verify(token, process.env.SECRET_JWT_SEED);
    req.uid = uid;
    req.name = name;
    req.title = title;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      message: "Invalid token",
    });
  }
  next();
};

module.exports = {
  validateJWT,
};
