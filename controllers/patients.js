const { response } = require("express");
const Patient = require("../models/Patients");

const getPatients = async (req, res = response) => {
  try {
    const patients = await Patient.find();

    res.status(200).json({
      success: true,
      message: "Patients retrieved successfully",
      patients,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error getting patients",
    });
  }
};

const getPatient = async (req, res = response) => {
  try {
    const patient = await Patient.findById(req.params.id);

    res.status(200).json({
      success: true,
      message: "Patient retrieved successfully",
      patient,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error getting patient",
    });
  }
};

const createPatient = async (req, res = response) => {
  const { identification, ...rest } = req.body;

  try {
    let patient = await Patient.findOne({ identification });

    if (patient) {
      return res.status(400).json({
        success: false,
        message: "Patient already exists",
      });
    }

    patient = new Patient(req.body);

    await patient.save();

    res.status(201).json({
      success: true,
      message: "Patient registered successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error registering patient",
    });
  }
};

const updatePatient = async (req, res = response) => {
  const patientId = req.params.id;

  try {
    const patient = await Patient.findById(patientId);

    if (!patient) {
      return res.status(404).json({
        success: false,
        message: "Patient not found",
      });
    }

    const updatedPatient = await Patient.findByIdAndUpdate(
      patientId,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Patient updated successfully",
      updatedPatient: updatedPatient,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error updating patient",
    });
  }
};

const deletePatient = async (req, res = response) => {
  try {
    const patient = await Patient.findById(req.params.id);

    if (!patient) {
      return res.status(404).json({
        success: false,
        message: "Patient not found",
      });
    }

    const patientDeleted = await Patient.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Patient deleted successfully",
      patient: patientDeleted,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error deleting patient",
    });
  }
};

module.exports = {
  getPatients,
  getPatient,
  createPatient,
  updatePatient,
  deletePatient,
};
