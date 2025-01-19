const { Router } = require("express");

const {
  getObservations,
  createObservation,
  updateObservation,
  deleteObservation,
} = require("../controllers/observations");
const { fieldsValidator } = require("../middlewares/fields-validator");

const router = Router();

router.get("/", [fieldsValidator], getObservations);
router.post("/", [fieldsValidator], createObservation);
router.put("/:id", [fieldsValidator], updateObservation);
router.delete("/:id", [fieldsValidator], deleteObservation);

module.exports = router;
