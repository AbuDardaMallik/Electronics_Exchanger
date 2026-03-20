const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middleware");
const Chat = require("../models/chat");
const mongoose = require("mongoose");
const User = require("../models/user");

router.get("/:userId", isLoggedIn, async (req, res, next) => {
  try {
    const { userId } = req.params;

    const otherUserId = new mongoose.Types.ObjectId(userId);

    //  receiver find
    const receiver = await User.findById(otherUserId);

    const messages = await Chat.find({
      $or: [
        { sender: req.user._id, receiver: otherUserId },
        { sender: otherUserId, receiver: req.user._id },
      ],
    })
      .populate("sender")
      .sort({ createdAt: 1 });

    return res.render("chat/index.ejs", {
      messages,
      receiverId: userId,
      receiver,
    });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
