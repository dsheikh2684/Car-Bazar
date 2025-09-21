const express=require("express");
const app=express();
const router=express.Router();
const asyncWrap=require("../utils/wrapAsync.js");
const User=require("../models/user.js");
const ExpressError=require("../utils/expressError.js");
const passport = require("passport");
const { saveUrl } = require("../middleware.js");
// app.use(express.urlencoded())
router.get("/signup",(req,res)=>{
    res.render("./users/signup.ejs");
});
router.post("/signup",async(req,res,next)=>{
    try{
        const {username,email,role,password}=req.body;
        console.log(username,email,role,password);
        let user={
            username:username,
            email:email,
            role:role,
        };
        let data=await User.register(user,password);
        req.login(data,(err,next)=>{
            if(err){
                req.flash("error",err.message);
                next();
            }
            else{
                req.flash("success","Welcome to Car Bazar");
                res.redirect("/listings");
            }
        })
    }
    catch(err){
        // console.log(err);
        req.flash("error",err.message);
        res.redirect("/user/signup");
    }
});
//login
router.get("/login",(req,res)=>{
    res.render("./users/login.ejs");
});

router.post(
"/login",
saveUrl,
passport.authenticate("local",{
failureRedirect:"/user/login",failureFlash:true
}),
async(req,res)=>{
    req.flash("success","Welcome Back To Car Bazar");
    const url=res.locals.redirectUrl?res.locals.redirectUrl:"/listings";
    res.redirect(url);
});

//logout
router.get("/logout",(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            req.flash("error",err.message);
            next();
        }
        else{
            req.flash("success","Log Out Successfully");
            res.redirect("/listings");
        }
    })
})
// router.use((err,req,res,next)=>{
//     let {statusCode=500,message="Somethig Went Wrong"}=err; 
//     res.status(statusCode).render("../error/listingError.ejs",{err});
// });
module.exports=router;