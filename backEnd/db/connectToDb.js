import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Mongo successfully");
  } catch (e) {
    console.log("Error connecting", e.message);
  }
};

export default connectDb;
