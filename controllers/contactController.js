const asychHandler = require("express-async-handler");

const getContacts = asychHandler(async (req, res) => {
  res.status(200).json({
    message: "get all contacts",
  });
});

const createContact = asychHandler(async (req, res) => {
  console.log("this is req body", req.body);
  const { name, email, phone, password } = req.body;
  if (!name || !email || !phone || !password) {
    res.status(400);
    throw new Error("all fields required");
  }
  res.status(201).json({
    message: "Create contact",
  });
});

const getContact = asychHandler(async (req, res) => {
  res.status(200).json({
    message: `Get contacts for ${req.params.id}`,
  });
});

const updateContact = asychHandler(async (req, res) => {
  res.status(200).json({
    message: `Update contact for ${req.params.id}`,
  });
});

const deleteContact = asychHandler(async (req, res) => {
  res.status(200).json({
    message: `Delete contact for ${req.params.id}`,
  });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
