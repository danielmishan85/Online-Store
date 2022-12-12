const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  shippingAddress: { type: String, required: true },
  email: { type: String, required: true },
  creditCardNumber: { type: String, required: true },
  expiryDate: { type: String, required: true },
  cvv: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
