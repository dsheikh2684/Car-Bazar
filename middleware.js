const {listingSchema}=require("./schema.js");

module.exports.isLoggedIn=((req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","Login To Add Car");
        res.redirect("/user/login");
    }
    else
        next();
});

module.exports.saveUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next()
}

module.exports.validateListing=(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    // console.log(result.error);
    if(error){
        throw new ExpressError(400,error);
    }
    else{
        next();
    }
}