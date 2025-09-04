const express=require("express");
const app=express();
require('dotenv').config();
const PORT=8080;    
const ExpressError=require("./utils/expressError.js");
const mongoose=require("mongoose");
const URL="mongodb://localhost:27017/"
//require car model
const car=require("../car bazar/models/cars");

const path = require("path");

const asyncWrap=require("./utils/wrapAsync.js");
//ser view engine as ejs
app.set("view engine","ejs");

app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));

const methodOverride=require("method-override");
app.use(methodOverride("_method"));
const {listingSchema}=require("./schema.js");
const ejsMate=require("ejs-mate");
const { stat } = require("fs");
const { env } = require("process");
app.engine("ejs",ejsMate);

app.use(express.static(path.join(__dirname,"/public")));


//call main function to connect with mongoDB
main()
.then(()=>{
    console.log("Connection Successful");
})
.catch((err)=>{
    console.log(err);
})
//function to connect with DB
async function main() {
    mongoose.connect(process.env.MONGO_URL);
}

app.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`);
})
//home route
app.get("/",(req,res)=>{
    res.send("Home Route");
});

//listing route
app.get("/listings",asyncWrap(async (req,res,next)=>{
    const listings= await car.find({});
    // console.log(listings);
    res.render("listings/index.ejs",{listings});
}));
//add car route
app.get("/listings/new",(req,res)=>{
    console.log("request generated"); 
    res.render("listings/new.ejs");
})
//show route
app.get("/listings/:id",asyncWrap(async(req,res,next)=>{
    const {id}=req.params;
    const carData=await car.findById(id);
    console.log(carData);
    res.render("listings/show.ejs",{carData});
}));
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
app.post("/listings",validateListing,asyncWrap(async (req,res,next)=>{
    // console.log(req.body);
    const listing=req.body.listing;
    console.log(listing);
    const newCar=new car(listing);
    console.log(newCar);
    await newCar.save();
    res.redirect("/listings");
    
}));
//update route
app.get("/listings/:id/edit",asyncWrap(async (req,res,next)=>{
    const {id}=req.params;
    const data=await car.findById(id);
    console.log(data);
    res.render("listings/edit.ejs",{data});
}));
app.put("/listings/:id",validateListing,asyncWrap(async (req,res,next)=>{
    const {id}=req.params;
    
    console.log(id);
    console.log(req.body.listing);
    await car.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
}));
app.delete("/listings/:id",asyncWrap(async (req,res,next)=>{
    const {id}=req.params;
    await car.findByIdAndDelete(id);
    res.redirect("/listings");
}));

// app.all("*",(req,res)=>{
//     console.log("page not found");
// })
// //middleware
app.use((err,req,res,next)=>{
    // console.log("middleware is hited");
    let {statusCode=500,message="Somethig Went Wrong"}=err;
    // console.log(statusCode);
    res.status(statusCode).render("../error.ejs",{err});
});
