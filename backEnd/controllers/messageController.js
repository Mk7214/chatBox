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
      console.log("Conversation not found");
      conversation = await Conversation.create({
        participants: [senderId, reciverId],
      });

      const newMessage = new Message({
        sender: senderId,
        reciver: reciverId,
        message: message,
      });

      if (newMessage) {
        conversation.messages.push(newMessage._id);
      }
      //this will run sequnetially
      // await conversation.save();
      // await newMessage.save();

      //this will run parallel
      await Promise.all([conversation.save(), newMessage.save()]);
      res.status(200).json({ newMessage });
    }
  } catch (e) {
    console.log("Error in sendMessage controller", e);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: reciverId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, reciverId] },
    }).populate("messages");

    res.status(200).json(conversation.messages);
  } catch (e) {
    console.log("Error in sendMessage controller", e.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
