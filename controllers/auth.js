const { response } = require("express");
const bcrypt = require("bcryptjs");

const Doctor = require("../models/Doctors");
const { generateJWT } = require("../helpers/jwt");

const registerDoctor = async (req, res = response) => {
  const { name, identification, password } = req.body;

  try {
    let doctor = await Doctor.findOne({ identification });

    if (doctor) {
      return res.status(400).json({
        success: false,
        message: "Doctor already exists",
      });
    }

    doctor = new Doctor(req.body);

    const salt = bcrypt.genSaltSync();
    doctor.password = bcrypt.hashSync(password, salt);

    await doctor.save();

    const token = await generateJWT(doctor.id, name, doctor.doctorTitle);

    res.status(201).json({
      success: true,
      message: "Doctor registered successfully",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const loginDoctor = async (req, res = response) => {
  const { email, password } = req.body;

  const lastCheckIn = new Date();

  try {
    const doctor = await Doctor.findOne({ email });

    if (!doctor) {
      return res.status(400).json({
        success: false,
        message: "Doctor not found",
      });
    }

    const validPassword = bcrypt.compareSync(password, doctor.password);

    if (!validPassword) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }

    doctor.lastcheckIn = lastCheckIn;
    await doctor.save();

    const token = await generateJWT(doctor.id, doctor.name, doctor.doctorTitle);

    res.status(200).json({
      success: true,
      message: "Login Doctor Success",
      did: doctor.id,
      name: doctor.name,
      lastCheckIn,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const renewToken = async (req, res = response) => {
  const { uid, name } = req;

  const token = await generateJWT(uid, name);

  res.status(200).json({
    success: true,
    message: "Token renewed successfully",
    token,
  });
};

module.exports = {
  registerDoctor,
  loginDoctor,
  renewToken,
};
