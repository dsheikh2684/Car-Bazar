const express=require("express");
const app=express();
const router=express.Router();
const asyncWrap=require("../utils/wrapAsync.js");
const car=require("../models/cars");
const {listingSchema}=require("../schema.js");
const ExpressError=require("../utils/expressError.js");
const {isLoggedIn,validateListing}=require("../middleware.js");
const listingController=require("../controllers/listingController.js");

//listing route
router.route("/")
    .get(asyncWrap(listingController.listings))
    .post(validateListing,asyncWrap(listingController.save));
    
//add car route
router.route("/new")
    .get(isLoggedIn,(listingController.addCar));

//show update and delete route
router.route("/:id")
    .get(asyncWrap(listingController.show))
    .put(validateListing,asyncWrap(listingController.update))
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