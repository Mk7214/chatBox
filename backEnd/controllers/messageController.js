import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: reciverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, reciverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, reciverId],
      });

      const newMessage = new Message({
        senderId,
        reciverId,
        message,
      });

      if (newMessage) {
        conversation.messages.push(newMessage);
      }
      //this will run sequnetially
      //await conversation.save();
      //await newMessage.save();

      //this will run parallel
      await Promise.all([conversation.save(), newMessage.save()]);
      res.status(200).json({ newMessage });
    }
  } catch (e) {
    console.log("Error in sendMessage controller", e.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
