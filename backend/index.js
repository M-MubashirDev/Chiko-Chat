import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./route/userRoute.js";
const app = express();
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 5001;
const URI = process.env.mongodb_URI;
try {
  mongoose.connect(URI);
  console.log("URI");
} catch (error) {
  console.log(error);
}
app.use("/user", routes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
