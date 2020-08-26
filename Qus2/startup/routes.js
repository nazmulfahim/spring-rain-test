const errors = require("../middlewares/errors");

const contactRoutes = require("../routes/contactRoute");

module.exports = function (app) {
  //contacts
  app.use("/api/contact", contactRoutes);
  //Handle Errors
  app.use(errors);
};
