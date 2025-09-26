const User=require("../models/user.js");
const passport = require("passport");
const { saveUrl } = require("../middleware.js");


module.exports.signUp=(req,res)=>{
    res.render("./users/signup.ejs");
};

module.exports.saveUser=async(req,res,next)=>{
    try{
        const {username,email,role,password}=req.body;
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
};

module.exports.getlogin=(req,res)=>{
    res.render("./users/login.ejs");
};

module.exports.login=async(req,res)=>{
    req.flash("success","Welcome Back To Car Bazar");
    const url=res.locals.redirectUrl?res.locals.redirectUrl:"/listings";
    res.redirect(url);
};

module.exports.logout=(req,res,next)=>{
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
};