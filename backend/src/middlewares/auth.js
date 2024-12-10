const jwt = require("jsonwebtoken")

const requireAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ message: "Unauthorized" });

  const token = authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, "JWT-SECRET", (err, user) => {
    if (err) return res.status(403).json([{ message: "Forbidden" }]);

    req.user = user;
    next();
  });
};

module.exports = {
  requireAuth
}