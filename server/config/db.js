import { connect } from "mongoose";

const connectDB = async () => {
  const conn = await connect(process.env.MONGODB_URI);
  console.log();
  console.log(`MongoDB Connected: ${conn.connection.host}`);
  console.log();
};

export default connectDB;
