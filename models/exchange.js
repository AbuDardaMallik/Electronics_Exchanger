const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exchangeSchema = new Schema({
  fromUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  toUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Listing",
  },
  offeredProduct: {
    type: Schema.Types.ObjectId,
    ref: "Listing",
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Exchange", exchangeSchema);
