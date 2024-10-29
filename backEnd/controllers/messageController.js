export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id } = req.params;
    const senderId = req.user;
  } catch (e) {
    console.log("Error in sendMessage controller", e.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
