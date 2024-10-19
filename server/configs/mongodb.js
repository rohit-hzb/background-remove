import mongoose from "mongoose";

// const dburl=process.env.MONGODB_URL;
const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Database connected");
  });
  await mongoose.connect(`${process.env.MONGODB_URL}/bg-removed`);
};

export default connectDB

