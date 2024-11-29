import mongoose, { model } from "mongoose";
const userScheme = new mongoose.Schema(
  {
    fullName: { type: String, require: true },
    email: { type: String, require: true, lowercase: true, unique: true },
    password: { type: String, require: true },
    confirmPassword: { type: String, require: true },
  },
  { timestamps: true } //when create and when update
);
const user = mongoose.model("Users", userScheme);
export default user;
