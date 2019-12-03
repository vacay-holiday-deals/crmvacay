const mongoose = require("mongoose");

const leadsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  leadref: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  salesperson: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  customer: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  destination: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  date_from: {
    type: Date,
    required: true,
    max: 255,
    min: 6
  },
  date_to: {
    type: Date,
    required: true,
    max: 255,
    min: 6
  },
  adults: {
    type: Number,
    required: true,
    default: 0
  },
  children: {
    type: Number,
    default: 0
  },
  infants: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Leads", leadsSchema);
