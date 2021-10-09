import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined");
  }
  // if (!process.env.MAIL_URI) {
  //   throw new Error("MAIL SERVICE URI NEEDED");
  // }
  try {
    const URI = process.env.MONGO_URI;
    await mongoose.connect(URI);

    console.log("Connected to mongoDB");
  } catch (err) {
    console.error(err);
  }

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log("App started on port " + PORT);
  });
};

start();
