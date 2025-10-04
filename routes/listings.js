const express=require("express");
const app=express();
const router=express.Router();
const asyncWrap=require("../utils/wrapAsync.js");
const car=require("../models/cars");
const {listingSchema}=require("../schema.js");
const ExpressError=require("../utils/expressError.js");
const {isLoggedIn,validateListing}=require("../middleware.js");
const listingController=require("../controllers/listingController.js");
const multer=require("multer");
const { storage } = require("../cloudConfig.js");
const upload=multer({ storage });
//listing route
router.route("/")
    .get(asyncWrap(listingController.listings))
    .post(validateListing,upload.array("listing[images]",6),asyncWrap(listingController.save));
    // .post(upload.array("listing[images]"),(req,res)=>{
    //     console.log("Requested");
    //     console.log(req.body);
    //     console.log(req.files);
    //     res.send(req.file);
    // })

    
//add car route
router.route("/new")
    .get(isLoggedIn,(listingController.addCar));

//show update and delete route
router.route("/:id")
    .get(asyncWrap(listingController.show))
    .put(validateListing,upload.array("listing[images]",6),asyncWrap(listingController.update))
    .delete(isLoggedIn,asyncWrap(listingController.destroyListing));

//edit route
router.route("/:id/edit")
    .get(isLoggedIn,asyncWrap(listingController.edit));

// //update route
// router.put("/:id",validateListing,asyncWrap(listingController.update));

// //Delete route
// router.delete("/:id",isLoggedIn,asyncWrap(listingController.destroyListing));

// //middleware
router.use(listingController.errorHandler);
module.exports=router;