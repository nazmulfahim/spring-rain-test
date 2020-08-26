const router = require("express").Router();
const Contact = require("../../models/Contact");
const isEmpty = require("../../utils/isEmpty");
const isValidPhoneNumber = require("../../utils/isValidPhoneNumber");

// @route   Get api/contact/:mobileNumber
// @desc    Get A Contact by Mobile Number
// @access  Private(Not Applicable)
router.get("/:mobileNumber", async (req, res) => {
  //Phone number needs to match exactly

  const contact = await Contact.findOne({
    mobileNumber: req.params.mobileNumber,
  });
  res.status(200).json(contact);
});

// @route   Post api/contact
// @desc    Create a contact
// @access  Private(Not Applicable)
router.post("/", async (req, res) => {
  if (
    typeof req.body.name !== "string" ||
    typeof req.body.mobileNumber !== "string"
  )
    throw new Error("Please Proive Required Fields");

  if (isEmpty(req.body.name)) throw new Error("Name shoudn't be Empty");
  if (!isValidPhoneNumber(req.body.mobileNumber))
    throw new Error("Invalid Phone Number!");

  const newContact = await new Contact({
    name: req.body.name,
    mobileNumber: req.body.mobileNumber,
  }).save();
  res.status(200).json(newContact);
});

// @route   Put api/contact/:id
// @desc    Update a contact
// @access  Private(Not Applicable
router.put("/:id", async (req, res) => {
  if (isEmpty(req.body.name)) throw new Error("Name shoudn't be Empty");

  if (!isValidPhoneNumber(req.body.mobileNumber))
    throw new Error("Invalid Phone Number!");

  const contact = {};
  contact.name = req.body.name;
  contact.mobileNumber = req.body.mobileNumber;

  const updatedContact = await Contact.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: contact },
    { new: true, useFindAndModify: false }
  );
  res.status(200).json(updatedContact);
});

// @route   Delete api/contact/:id
// @desc    Delete a contact
// @access  Private(Not Applicable
router.delete("/:id", async (req, res) => {
  const deletedAddress = await Address.findOneAndRemove({ id: req.params.id });
  res.status(200).json(deletedAddress);
});

// @route   Get api/contact
// @desc    Get ll contact
// @access  Private(Not Applicable
router.get("/", async (req, res) => {
  const contacts = await Contact.find({});
  res.status(200).json(contacts);
});

module.exports = router;
