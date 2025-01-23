const { Schema, model } = require("mongoose");

const DoctorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  identification: {
    type: String,
    required: true,
    unique: true,
  },
  doctorTitle: {
    type: String,
    required: false,
  },
  lastcheckIn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Doctor", DoctorSchema);
