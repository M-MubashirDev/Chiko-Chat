import TokenandCookieSaved from "../jwt/TokenandCookieSaved.js";
import user from "../models/UsersModel.js";
import bcrypt from "bcryptjs";
//validation of the signup and than signup
export async function SignUp(req, resp) {
  try {
    const { name, email, password, confirmPassword } = req?.body;
    console.log(req.body);
    if (password !== confirmPassword)
      return resp.status(400).json({ messsege: "password does not match" });
    const checkEmail = await user.findOne({ email });
    if (checkEmail) return resp.status(400).json("emial already exits");
    const hashPassword = await bcrypt.hash(password, 10);
    let data = new user({
      name,
      email,
      password: hashPassword,
      confirmPassword,
    });
    data = await data.save();
    if (data) {
      TokenandCookieSaved(data._id, resp);
      resp.status(200).json({ message: "user singeup sucessfully" });
    }
  } catch (error) {
    console.log(error);
    resp.status(500).json({ message: "server error" });
  }
}
export async function Login(req, resp) {
  try {
    // console.log()
    const { email: reqEmail, password: reqPass } = req?.body;

    const currentUser = await user.findOne({ email: reqEmail });
    console.log(currentUser);
    const { _id, password, email, fullName } = currentUser;
    const checkbcrypt = await bcrypt.compare(reqPass, password);
    if (!reqEmail || !checkbcrypt)
      return resp.status(400).json({ message: "invalid email or password" });
    TokenandCookieSaved(_id, resp);
    resp.status(201).json({
      message: "user login successfully",
      user: {
        _id,
        fullName,
        email,
      },
    });
  } catch (error) {
    console.log(error);
    resp.status(500).json({ message: "server error" });
  }
}
function Logout(req, resp) {
  try {
    resp.clearCookie("jwt");
    resp.status(201).json({ message: "logout successfully" });
  } catch (error) {
    console.log(error);
    resp.status(500).json({ message: "server error" });
  }
}
