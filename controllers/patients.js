const { response } = require("express");

const getPatients = async (req, res = response) => {
    res.status(200).json({
        success: true,
        message: "Get Patients Success",
    });
};

const getPatient = async (req, res = response) => {
    res.status(200).json({
        success: true,
        message: "Get Patient Success",
    });
};

const createPatient = async (req, res = response) => {
    res.status(200).json({
        success: true,
        message: "Create Patient Success",
    });
};

const updatePatient = async (req, res = response) => {
    res.status(200).json({
        success: true,
        message: "Update Patient Success",
    });
};

const deletePatient = async (req, res = response) => {
    res.status(200).json({
        success: true,
        message: "Delete Patient Success",
    });
};

module.exports = {
  getPatients,
  getPatient,
  createPatient,
  updatePatient,
  deletePatient,
};
