module.exports = function logger(req, res, next) {
  console.log("== Got a new request:");
  console.log("  -- Method:", req.method);
  console.log("  -- Url:", req.originalUrl);
  next();
}
