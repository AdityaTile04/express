const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add the contact name"],
    },
    email: {
      type: String,
      required: [true, "please add the contact email"],
    },
    phone: {
      type: Number,
      required: [true, "please add the contact phone"],
    },
    password: {
      type: String,
      required: [true, "please add contact password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
