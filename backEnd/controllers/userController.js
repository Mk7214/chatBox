import User from "../models/userModels.js";

export const getUserForSideBar = async (req, res) => {
  try {
    const userId = req.user._id;
    const users = await User.find({ _id: { $ne: userId } }).select("-password");
    //$ne means not equal therfor users will have all the users in the except the logged in user

    res.status(200).json(users);
  } catch (e) {
    console.log("Error in getUserForSideBar controller", e.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
