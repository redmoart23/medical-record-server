const { Router } = require("express");
const {
  getObservationsByPatient,
  createObservation,
  updateObservation,
  deleteObservation,
} = require("../controllers/observations");
const { fieldsValidator } = require("../middlewares/fields-validator");
const { validateJWT } = require("../middlewares/validate-jwt");
const { check } = require("express-validator");

const router = Router();

router.use(validateJWT);

router.get("/:id", getObservationsByPatient);
router.post(
  "/:id",
  [check("notes", "Notes is required").not().isEmpty(), fieldsValidator],
  createObservation
);

router.put("/:id", updateObservation);

router.delete("/:id", deleteObservation);

module.exports = router;
