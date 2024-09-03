const express= require('express');
const router=express.Router();
const authControllers= require("../controller/auth-controller")

router.get('/',authControllers.home)


router.route('/register').post(authControllers.register)



module.exports = router;