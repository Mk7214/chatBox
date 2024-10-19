import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/autnRoutes.js";
import connectDb from "./db/connectToDb.js";
import messageRoutes from "./routes/messageRoutes.js";

const app = express();

//middleware

dotenv.config(); // to load .env file
app.use(express.json()); //to parse the json payload

const port = process.env.PORT || 8081;
app.use("/api/auth", authRoute); // to access the auth routes
app.use("/api/message", messageRoutes);
app.get("/", (req, res) => {
  res.end("Hello");
});

app.listen(port, () => {
  connectDb();
  console.log(`server listening on ${port}`);
});
