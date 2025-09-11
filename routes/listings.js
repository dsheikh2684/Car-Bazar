const express=require("express");
const router=express.Router();
const asyncWrap=require("../utils/wrapAsync.js");
const car=require("../models/cars");
const {listingSchema}=require("../schema.js");
const ExpressError=require("../utils/expressError.js");

//listing route
router.get("/",asyncWrap(async (req,res,next)=>{
    const listings= await car.find({});
    // console.log(listings);
    res.render("listings/index.ejs",{listings});
}));
//add car route
router.get("/new",(req,res)=>{
    console.log("request generated"); 
    res.render("listings/new.ejs");
})
//show route
router.get("/:id",asyncWrap(async(req,res,next)=>{
    const {id}=req.params;
    const carData=await car.findById(id);
    console.log(carData);
    res.render("listings/show.ejs",{carData});
}));
//middleware
const validateListing=(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    // console.log(result.error);
    if(error){
        throw new ExpressError(400,error);
    }
    else{
        next();
    }
}
//post route
router.post("/",validateListing,asyncWrap(async (req,res,next)=>{
    // console.log(req.body);
    const listing=req.body.listing;
    console.log(listing);
    const newCar=new car(listing);
    console.log(newCar);
    await newCar.save();
    res.redirect("/listings");
    
}));
//update route
router.get("/:id/edit",asyncWrap(async (req,res,next)=>{
    const {id}=req.params;
    const data=await car.findById(id);
    console.log(data);
    res.render("listings/edit.ejs",{data});
}));
router.put("/:id",validateListing,asyncWrap(async (req,res,next)=>{
    const {id}=req.params;
    
    console.log(id);
    console.log(req.body.listing);
    await car.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
}));
router.delete("/:id",asyncWrap(async (req,res,next)=>{
    const {id}=req.params;
    await car.findByIdAndDelete(id);
    res.redirect("/listings");
}));

module.exports=router;