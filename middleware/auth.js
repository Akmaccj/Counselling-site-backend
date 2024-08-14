const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY || "counselling-site";

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"]?.replace(/^Bearer\s+/i, "");

  if (!token) {
    return res.status(403).json({ error: "No token provided." });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Failed to authenticate token." });
    }
    req.email = decoded.email;
    next();
  });
};

module.exports = verifyToken;
