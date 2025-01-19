const { response } = require("express");

const getObservations = async (req, res = response) => {
  res.status(200).json({
    success: true,
    message: "Get Observations Success",
  });
};

const createObservation = async (req, res = response) => {
  res.status(200).json({
    success: true,
    message: "Create Observation Success",
  });
};

const updateObservation = async (req, res = response) => {
  res.status(200).json({
    success: true,
    message: "Update Observation Success",
  });
};

const deleteObservation = async (req, res = response) => {
  res.status(200).json({
    success: true,
    message: "Delete Observation Success",
  });
};

module.exports = {
  getObservations,
  createObservation,
  updateObservation,
  deleteObservation,
};