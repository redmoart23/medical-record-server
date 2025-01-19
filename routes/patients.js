const { Router } = require("express");

const { fieldsValidator } = require("../middlewares/fields-validator");
const {
  getPatients,
  getPatient,
  createPatient,
  updatePatient,
  deletePatient,
} = require("../controllers/patients");

const router = Router();

router.get("/", [fieldsValidator], getPatients);
router.get("/:id", [fieldsValidator], getPatient);
router.post("/", [fieldsValidator], createPatient);
router.put("/:id", [fieldsValidator], updatePatient);
router.delete("/:id", [fieldsValidator], deletePatient);

module.exports = router;
