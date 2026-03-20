const User = require("../models/user");
const Listing = require("../models/listing");
const Exchange = require("../models/exchange");
const Review = require("../models/review");

module.exports.renderSignUpForm = (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new User({ email, username });
    // console.log("New User ", newUser);

    const registeredUser = await User.register(newUser, password);
    // console.log("Registered User ", registeredUser);

    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Welcome to Airbnb!");
      res.redirect("/listings");
    });
  } catch (e) {
    // console.log(e);
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};

module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

module.exports.login = (req, res) => {
  req.flash("success", "Welcome Back!");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

module.exports.profile = async (req, res) => {
  const userId = req.user._id;

  const user = await User.findById(userId);

  
  if (!user) {
    req.flash("error", "User not found!");
    return res.redirect("/listings");
  }

  const myListings = await Listing.find({ owner: userId });

  const myRequests = await Exchange.find({
    $or: [{ fromUser: userId }, { toUser: userId }],
  }).populate("product");

  const myReviews = await Review.find({ owner: userId });

  res.render("users/profile.ejs", {
    listings: myListings,
    requests: myRequests,
    reviews: myReviews,
    user: user,
  });
};

module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You are Logged Out!");
    res.redirect("/listings");
  });
};
