const { Router } = require("express");
const { check } = require("express-validator");

const { fieldsValidator } = require("../middlewares/fields-validator");
const {
  loginDoctor,
  registerDoctor,
  renewToken,
} = require("../controllers/auth");

const router = Router();

router.post(
  "/",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").not().isEmpty(),
    fieldsValidator,
  ],
  loginDoctor
);
router.post(
  "/signup",
  [
    check("name", "Name is required").not().isEmpty(),
    check("identification", "Identification is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check(
      "password",
      "Password length must be at least 6, with at least one lowercase, one uppercase, one number and one special character"
    )
      .isLength({ min: 6 })
      .isStrongPassword(),

    check("doctorTitle", "Title is required").not().isEmpty(),
    fieldsValidator,
  ],
  registerDoctor
);
router.get("/refresh-token", [fieldsValidator], renewToken);

module.exports = router;
