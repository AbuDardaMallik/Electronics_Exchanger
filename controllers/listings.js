const Listing = require("../models/listing"); // Import the Listing model
const review = require("../models/review"); // Import the Listing model
const Exchange = require("../models/exchange"); // Import the Exchange model
const ExpressError = require("../utils/ExpressError"); // Import the custom ExpressError class

module.exports.index = async (req, res, next) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { listings: allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.createListing = async (req, res, next) => {
  const newListing = new Listing(req.body);

  // // Schema Validation er jonno akta tool use kora better hobe, jemon Joi.
  // eta use korle code ta aro clean and maintainable hobe.
  // if (!newListing) {
  //   throw new ExpressError(
  //     "Invalid Listing Data,Send Valid Data for Listing",
  //     400,
  //   );
  // }
  // if (!newListing.title) {
  //   throw new ExpressError("Title is Missing!", 400);
  // }
  // if (!newListing.description) {
  //   throw new ExpressError("Description is Missing!", 400);
  // }
  // if (!newListing.price) {
  //   throw new ExpressError("Price is Missing!", 400);
  // }
  // if (!newListing.country) {
  //   throw new ExpressError("Country is Missing!", 400);
  // }
  // if (!newListing.location) {
  //   throw new ExpressError("Location is Missing!", 400);
  // }
  newListing.owner = req.user._id;
  await newListing.save();
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res, next) => {
  const { id } = req.params;
  const foundListing = await Listing.findById(id);

  if (!foundListing) {
    req.flash("error", "listing you requested does not exist!");
    return res.redirect("/listings");
  }

  res.render("listings/edit.ejs", { listing: foundListing });
};

module.exports.updateListing = async (req, res, next) => {
  const { id } = req.params;

  // { runValidators: true } eta use korar karon holo jate update er somoyo o schema er validation gulo kaj kore
  await Listing.findByIdAndUpdate(id, req.body, { runValidators: true });

  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res, next) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};

module.exports.showListing = async (req, res, next) => {
  const { id } = req.params;

  // 🔹 Listing fetch
  const foundListing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: { path: "owner" },
    })
    .populate("owner");

  if (!foundListing) {
    req.flash("error", "listing you requested does not exist!");
    return res.redirect("/listings");
  }

  // 🔹 Existing request check
  let existingRequest = null;

  if (req.user) {
    existingRequest = await Exchange.findOne({
      fromUser: req.user._id,
      product: id,
    });
  }

  // 🔥 NEW: user er nijer products
  let userListings = [];

  if (req.user) {
    userListings = await Listing.find({
      owner: req.user._id,
      _id: { $ne: id },
    });
  }

  // 🔹 Render
  res.render("listings/show.ejs", {
    listing: foundListing,
    existingRequest,
    userListings, // 👈 MUST PASS
  });
};
