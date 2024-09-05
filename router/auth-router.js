const express= require('express');
const router=express.Router();
const authControllers= require("../controller/auth-controller");
const signupSchema= require("../validator/auth-validator");
const validate = require("../middlewares/validate-middleware")

router.get('/',authControllers.home)


router.route('/register').post(validate(signupSchema),authControllers.register);

router.route('/login').post(authControllers.login);

module.exports = router;