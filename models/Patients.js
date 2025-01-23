const { Schema, model } = require("mongoose");

const PatientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  identification: {
    type: String,
    required: true,
    unique: true,
  },
  cellPhone: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    unique: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  identificationType: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  entity: {
    type: String,
    required: true,
  },
  lastVisit: {
    type: Date,
    required: true,
  },
  visitType: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = model("Patient", PatientSchema);
