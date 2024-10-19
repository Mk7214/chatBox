import User from "../models/userModels.js";
import bcrypt from "bcryptjs";
import generateTokenAndCookies from "../utils/generateToken.js";

export const signUp = async (req, res) => {
  try {
    const { Name, userName, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "passwords do not match" });
    }

    const existingUser = await User.findOne({ userName });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    //password hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const profilePic =
      await `https://avatar.iran.liara.run/username?username=${userName}`;

    const user = new User({
      Name,
      userName,
      password: hashedPassword,
      gender,
      profilePic,
    });

    if (user) {
      //genrate the jwt token
      const token = generateTokenAndCookies(user._id, res);
      await user.save();
      res.status(201).json({
        _id: user._id,
        name: user.Name,
        userName: user.userName,
        profilePic: user.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (e) {
    console.log("Error in signUp controller", e.message);
    res.status(500).json({ message: e.message });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    const isMatch = await bcrypt.compare(password, user.password || "");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    generateTokenAndCookies(user._id, res);
    res.status(200).json({
      _id: user._id,
      name: user.Name,
      userName: user.userName,
      profilePic: user.profilePic,
    });
  } catch (e) {
    console.log("Error in login controller", e.message);
    res.status(500).json({ message: e.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("token", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (e) {
    console.log("Error in logout controller", e.message);
    res.status(500).json({ message: e.message });
  }
};
