const asychHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// Get all contacts
const getContacts = asychHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user_id });
  res.status(200).json(contacts);
});

// create new contact
const createContact = asychHandler(async (req, res) => {
  console.log("this is req body", req.body);
  const { name, email, phone, password } = req.body;
  if (!name || !email || !phone || !password) {
    res.status(400);
    throw new Error("all fields required");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user_id,
  });
  res.status(201).json(contact);
});

// get individual contact
const getContact = asychHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

// update contact
const updateContact = asychHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }

  if (contact.user_id.toString() !== req.user_id) {
    res.status(403);
    throw new Error("user don't have permission to update other users contact");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});

// delete contact
const deleteContact = asychHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Not Found");
  }

  if (contact.user_id.toString() !== req.user_id) {
    res.status(403);
    throw new Error(
      "user don't have permission to delete contact of other users"
    );
  }

  await Contact.remove();
  res.status(200).json({ message: "Contact deleted successfully" });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
