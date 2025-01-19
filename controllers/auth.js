const { response } = require("express");

const registerDoctor = async (req, res = response) => {
  res.status(200).json({
    success: true,
    message: "Register Doctor Success",
  });
};

const loginDoctor = async (req, res = response) => {
  res.status(200).json({
    success: true,
    message: "Login Doctor Success",
  });
};

const renewToken = async (req, res = response) => {
  res.status(200).json({
    success: true,
    message: "Renew Token Success",
  });
};

module.exports = {
  registerDoctor,
  loginDoctor,
  renewToken,
};
