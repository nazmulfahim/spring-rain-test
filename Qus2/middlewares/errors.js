module.exports = function (err, req, res, next) {
  //We can pass custom status as well
  res.status(400).json({ msg: err.message || "Somwthing went wrong" });
};
