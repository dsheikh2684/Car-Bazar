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
    next();
}