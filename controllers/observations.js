const { response } = require("express");
const mongoose = require("mongoose");
const Observation = require("../models/Observations");
const Patient = require("../models/Patients");

const getObservationsByPatient = async (req, res = response) => {
  const patientId = req.params.id;

  try {
    const observations = await Observation.find({ patientId });

    res.status(200).json({
      success: true,
      message: "Observations retrieved successfully",
      observations,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error getting observations",
    });
  }
};

const createObservation = async (req, res = response) => {
  const { notes } = req.body;
  const patientId = req.params.id;

  try {
    const patient = await Patient.findById(patientId);

    if (!patient) {
      return res.status(404).json({
        success: false,
        message: "Patient not found",
      });
    }

    const observation = new Observation({
      doctorId: req.uid,
      doctorName: req.name,
      doctorTitle: req.title,
      patientId,
      notes,
    });

    const observationSaved = await observation.save();

    res.status(200).json({
      success: true,
      message: "Create Observation Success",
      observation: observationSaved,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error creating observation",
    });
  }
};

const updateObservation = async (req, res = response) => {
  const observationId = req.params.id;

  const updatedAt = Date.now();

  try {
    const observation = await Observation.findById(observationId);

    if (!observation) {
      return res.status(404).json({
        success: false,
        message: "Observation not found",
      });
    }

    const observationUpdated = await Observation.findByIdAndUpdate(
      observationId,
      { ...req.body, updatedAt },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Update Observation Success",
      observation: observationUpdated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error updating observation",
    });
  }
};

const deleteObservation = async (req, res = response) => {
  const observationId = req.params.id;

  if (!observationId || !mongoose.Types.ObjectId.isValid(observationId)) {
    return res.status(400).json({ error: "Invalid or missing ID" });
  }

  try {
    const observation = await Observation.findById(observationId);

    if (!observation) {
      return res.status(404).json({
        success: false,
        message: "Observation not found",
      });
    }

    const observationDeleted = await Observation.findByIdAndDelete(
      observationId
    );

    res.status(200).json({
      success: true,
      message: "Delete Observation Success",
      observation: observationDeleted,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error deleting observation",
    });
  }
};

module.exports = {
  getObservationsByPatient,
  createObservation,
  updateObservation,
  deleteObservation,
};
