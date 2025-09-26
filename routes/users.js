const express=require("express");
const app=express();
const router=express.Router();
const asyncWrap=require("../utils/wrapAsync.js");
const User=require("../models/user.js");
const ExpressError=require("../utils/expressError.js");
const passport = require("passport");
const { saveUrl } = require("../middleware.js");
const userController=require("../controllers/userController.js");

//signup Route
router.route("/signup")
    .get((userController.signUp))
    .post((userController.saveUser));


//login
router.route("/login")
    .get((userController.getlogin))
    .post(
        saveUrl,
        passport.authenticate("local",{
        failureRedirect:"/user/login",failureFlash:true
        }),
        (userController.login));

//logout
router.route("/logout")
    .get((userController.logout));

module.exports=router;