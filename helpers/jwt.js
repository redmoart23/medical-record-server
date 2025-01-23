const jwt = require("jsonwebtoken");

const generateJWT = (uid, name, title) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, name, title };

    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED,
      {
        expiresIn: "2h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("Error generating JWT");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  generateJWT,
};
