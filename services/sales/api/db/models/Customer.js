const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  phone: {
    type: Number,
    required: true,
    max: 255,
    min: 6
  },
  leadsource: {
    type: String,
    required: true,
    max: 255,
    min: 3
  },
  country: {
    type: String,
    required: true,
    min: 3,
    max: 255
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Customers", customerSchema);
