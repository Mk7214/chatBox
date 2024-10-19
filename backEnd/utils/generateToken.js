import jwt from "jsonwebtoken";

const generateTokenAndCookies = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });

  res.cookie("token", token, {
    maxAge: 10 * 24 * 60 * 60 * 1000, //expires in 10 days
    httpOnly: true, //http only cookie to prevent javascript access, securing from cross site scripting
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict", //cookies only sent on same site , csrf attack
  });
};

export default generateTokenAndCookies;
