import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  profilePic: String,
  bio: String,
  role: { type: String, enum: ["admin", "member"], default: "member" },
});

export default mongoose.model("User", userSchema);