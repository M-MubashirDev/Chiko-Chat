import express from "express";
import { SignUp, Login, Logout } from "../controller/userController.js";
const routes = express.Router();
routes.post("/signup", SignUp);
routes.post("/login", Login);
routes.post("/logout", Logout);
export default routes;
