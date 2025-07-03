const jwt = require("jsonwebtoken");
const JWT_SECRET = "ShrutiSuperSecretKey"; // use env in production

const fetchuser = (req, res, next) => {
  // Get token from header
  const token = req.header("auth-token");

  if (!token) {
    return res
      .status(401)
      .send({ error: "Please authenticate using a valid token" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user; // contains user.id
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchuser;
