import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
const PASSWORD = process.env.MONGODB_PASSWORD;

const connectMongo = async () => {
  await mongoose.connect(MONGODB_URI.replace("<password>", PASSWORD));
};

export default connectMongo;
