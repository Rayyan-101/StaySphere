const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const Listing=require("../models/listing.js");
const listingController=require("../controllers/listings.js");
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js");


router
.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,validateListing,wrapAsync(listingController.createListing));

router.get("/new",isLoggedIn,listingController.renderNewForm);

router
.route("/:id")
.get(isLoggedIn,wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner,validateListing,wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));


router.get("/:id/edit",isOwner,isLoggedIn,wrapAsync(listingController.renderEditForm));

module.exports=router;