import express from "express";
import { SignUp, Login } from "../controller/userController.js";
const routes = express.Router();
routes.post("/signup", SignUp);
routes.post("/login", Login);
export default routes;
