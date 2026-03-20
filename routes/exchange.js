const express = require("express");
const router = express.Router();
const exchangeController = require("../controllers/exchange");
const { isLoggedIn } = require("../middleware");

// create request
router.post("/request", isLoggedIn, exchangeController.createRequest);

// view requests
router.get("/", isLoggedIn, exchangeController.getRequests);

// accept
router.post("/:id/accept", isLoggedIn, exchangeController.acceptRequest);

// reject
router.post("/:id/reject", isLoggedIn, exchangeController.rejectRequest);

module.exports = router;
