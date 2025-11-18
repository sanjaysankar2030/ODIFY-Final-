module.exports = function (allowedRoles) {
  return function (req, res, next) {
    // Check if user exists
    if (!req.user) return res.status(401).send("Unauthorized");

    // Check if the user's role is allowed
    if (allowedRoles.includes(req.user.role)) {
      next(); // Allow the request
    } else {
      return res.status(403).send("Forbidden");
    }
  };
};
