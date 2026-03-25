const Chat = require("../models/chat");

module.exports.handleSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("User Connected:", socket.id);

    // Join Room
    socket.on("joinRoom", ({ sender, receiver }) => {
      const roomId = [sender, receiver].sort().join("_");

      console.log("JOIN ROOM:", roomId);
      socket.join(roomId);
    });

    // Send Message
    socket.on("sendMessage", async (data) => {
      const { message, sender, receiver } = data;

      try {
        const newMsg = await Chat.create({
          sender,
          receiver,
          message,
        });

        const populatedMsg = await newMsg.populate("sender");

        // 🔥 ROOM SERVER SIDE CREATE
        const roomId = [sender, receiver].sort().join("_");

        io.to(roomId).emit("receiveMessage", {
          message: populatedMsg.message,
          sender: populatedMsg.sender._id.toString(),
          _id: populatedMsg._id,
        });
      } catch (err) {
        console.log("Chat Error:", err);
      }
    });

    // Mark Seen
    socket.on("markSeen", async (msgId) => {
      try {
        const msg = await Chat.findByIdAndUpdate(msgId, { seen: true });

        const roomId = [msg.sender.toString(), msg.receiver.toString()]
          .sort()
          .join("_");

        io.to(roomId).emit("messageSeen", msgId);
      } catch (err) {
        console.log("Seen Error:", err);
      }
    });
  });
};
