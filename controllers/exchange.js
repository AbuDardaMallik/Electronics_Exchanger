const Exchange = require("../models/exchange");
const Listing = require("../models/listing");

// Send request
module.exports.createRequest = async (req, res) => {
  const { listingId, myProductId } = req.body;

  const listing = await Listing.findById(listingId);

  const existingRequest = await Exchange.findOne({
    fromUser: req.user._id,
    product: listingId,
  });

  if (existingRequest) {
    req.flash("error", "You already sent a request for this product!");
    return res.redirect(`/listings/${listingId}`);
  }

  const newRequest = new Exchange({
    fromUser: req.user._id,
    toUser: listing.owner,
    product: listingId,
    offeredProduct: myProductId,
  });

  await newRequest.save();

  req.flash("success", "Exchange Request Sent!");
  res.redirect(`/listings/${listingId}`);
};

// Accept request
module.exports.acceptRequest = async (req, res) => {
  const { id } = req.params;

  const exchange = await Exchange.findByIdAndUpdate(
    id,
    { status: "accepted" },
    { new: true },
  );

  req.flash("success", "Exchange Accepted!");

  //  AUTO REDIRECT TO CHAT
  const otherUser = exchange.fromUser.equals(req.user._id)
    ? exchange.toUser
    : exchange.fromUser;

  res.redirect(`/chat/${otherUser}`);
};

// Reject request
module.exports.rejectRequest = async (req, res) => {
  const { id } = req.params;

  await Exchange.findByIdAndUpdate(id, { status: "rejected" });

  req.flash("error", "Exchange Rejected!");
  res.redirect("/exchange");
};

// Show all requests
module.exports.getRequests = async (req, res) => {
  const sentRequests = await Exchange.find({
    fromUser: req.user._id,
  })
    .populate("product")
    .populate("offeredProduct")
    .populate("toUser");

  const receivedRequests = await Exchange.find({
    toUser: req.user._id,
  })
    .populate("product")
    .populate("offeredProduct")
    .populate("fromUser");

  //  NULL FILTER ADD
  const filteredSentRequests = sentRequests.filter(
    (req) => req.product !== null,
  );

  const filteredReceivedRequests = receivedRequests.filter(
    (req) => req.product !== null,
  );

  const pendingCount = await Exchange.countDocuments({
    toUser: req.user._id,
    status: "pending",
  });

  res.render("exchange/index.ejs", {
    sentRequests: filteredSentRequests,
    receivedRequests: filteredReceivedRequests,
    pendingCount,
  });
};
