const { Router } = require("express");
const { check } = require("express-validator");
const { validateJWT } = require("../middlewares/validate-jwt");
const { fieldsValidator } = require("../middlewares/fields-validator");
const {
  getPatients,
  getPatient,
  createPatient,
  updatePatient,
  deletePatient,
} = require("../controllers/patients");

const router = Router();

router.use(validateJWT);

router.get("/", getPatients);

router.get("/:id", getPatient);

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("identification", "Identification is required").not().isEmpty(),
    check("cellPhone", "Email is required").not().isEmpty(),
    check("birthDate", "BirthDate is required").not().isEmpty(),
    check("age", "Age is required").not().isEmpty(),
    check("identificationType", "Sex is required").not().isEmpty(),
    check("address", "Address is required").not().isEmpty(),
    check("occupation", "Occupation is required").not().isEmpty(),
    check("entity", "Entity is required").not().isEmpty(),
    check("visitType", "VisitType is required").not().isEmpty(),
    check("status", "Status is required").not().isEmpty(),
    fieldsValidator,
  ],
  createPatient
);

router.put(
  "/:id",
  [
    check("name", "Name is required").not().isEmpty(),
    check("identification", "Identification is required").not().isEmpty(),
    check("cellPhone", "Email is required").not().isEmpty(),
    check("birthDate", "BirthDate is required").not().isEmpty(),
    check("age", "Age is required").not().isEmpty(),
    check("identificationType", "Sex is required").not().isEmpty(),
    check("address", "Address is required").not().isEmpty(),
    check("occupation", "Occupation is required").not().isEmpty(),
    check("entity", "Entity is required").not().isEmpty(),
    check("visitType", "VisitType is required").not().isEmpty(),
    check("status", "Status is required").not().isEmpty(),
    fieldsValidator,
  ],
  updatePatient
);
router.delete("/:id", deletePatient);

module.exports = router;
