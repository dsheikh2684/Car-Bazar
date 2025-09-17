const express=require("express");
const app=express();
const router=express.Router();
const asyncWrap=require("../utils/wrapAsync.js");
const User=require("../models/user.js");
const ExpressError=require("../utils/expressError.js");
// app.use(express.urlencoded())
router.get("/login",(req,res)=>{
    res.render("./users/login.ejs");
});
router.post("/login",async(req,res,next)=>{
    try{
        const {username,email,password}=req.body;
        let user={
            username:username,
            email:email,
        };
        let data=await User.register(user,password);
        console.log(data);
        res.send("User Saved");
    }
    catch(err){
        req.flash("error",err.message);
        res.redirect("/user/login");
    }
});

router.use((err,req,res,next)=>{
    let {statusCode=500,message="Somethig Went Wrong"}=err; 
    res.status(statusCode).render("../error/listingError.ejs",{err});
});
module.exports=router;