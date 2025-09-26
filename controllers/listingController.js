const car=require("../models/cars");


module.exports.listings=async (req,res,next)=>{
    const listings= await car.find({});
    res.render("listings/index.ejs",{listings});
};

module.exports.addCar=(req,res)=>{
    res.render("listings/new.ejs");
};

module.exports.show=async(req,res,next)=>{
    const {id}=req.params;
    const carData=await car.findById(id);
    if(carData===null){
        req.flash("error","This Car is no longer exist");
        res.redirect("/listings");
    }
    else{
        let currUser=res.locals.currUser;
        res.render("listings/show.ejs",{carData,currUser});
    }
};

module.exports.save=async(req,res,next)=>{
    const listing=req.body.listing;
    const newCar=new car(listing);
    newCar.dealer=res.locals.currUser;
    await newCar.save();
    req.flash("success","Car Added successfully");
    res.redirect("/listings");
    
};

module.exports.edit=async (req,res,next)=>{
    const {id}=req.params;
    const data=await car.findById(id);
    if(data===null){
        req.flash("error","This Car is not exist");
        res.redirect("/listings");
    }
    else
        res.render("listings/edit.ejs",{data});
};
module.exports.update=async (req,res,next)=>{
    const {id}=req.params;
    
    await car.findByIdAndUpdate(id,{...req.body.listing});
    req.flash("success","Car Updated Successfully");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing=async (req,res,next)=>{
    const {id}=req.params;
    await car.findByIdAndDelete(id);
    req.flash("success","Car Deleted Successfully");
    res.redirect("/listings");
};

module.exports.errorHandler=(err,req,res,next)=>{
    let {statusCode=500,message="Somethig Went Wrong"}=err; 
    res.status(statusCode).render("../error/listingError.ejs",{err});
};