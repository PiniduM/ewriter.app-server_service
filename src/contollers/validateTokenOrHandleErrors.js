import jwt from "jsonwebtoken"

const ValidateTokenOrHandleErrors = (loginToken,res) => {

const jwtSecret = process.env.JWTSECRET;

try {
  return jwt.verify(loginToken, jwtSecret);
} catch (err) {
  if (err.message === "jwt expired")
    res.status(406).send("login_expired");
  else if (err.message === "invalid token")
    res.status(406).send("invalid_login");
  else {res.status(500).send("undefined_error")}
  return false;
}

}

export default ValidateTokenOrHandleErrors;