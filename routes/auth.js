const { Router } = require("express");
const { check } = require("express-validator");

const { fieldsValidator } = require("../middlewares/fields-validator");
const {
  loginDoctor,
  registerDoctor,
  renewToken,
} = require("../controllers/auth");

const router = Router();

router.post("/", [fieldsValidator], loginDoctor);
router.post("/signup", [fieldsValidator], registerDoctor);
router.get("/refresh-token", [fieldsValidator], renewToken);

module.exports = router;
