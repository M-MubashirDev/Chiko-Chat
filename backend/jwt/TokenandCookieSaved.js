import jwtTokens from "jsonwebtoken";
function TokenandCookieSaved(id, resp) {
  const token = jwtTokens.sign({ id }, process.env.jwt_Unique, {
    expiresIn: "10d",
  });
  resp.cookie("jwt", token, { httpOnly: true, secure: true, sameSite: true });
}

export default TokenandCookieSaved;
