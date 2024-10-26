const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  token: { type: String, required: true, unique: true },
  amount: { type: Number, required: true },
  status: { type: String, default: 'pending' } // 'pending', 'success', 'failure'
});

module.exports = mongoose.model('Payment', PaymentSchema);
