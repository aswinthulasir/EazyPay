const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');
const { v4: uuidv4 } = require('uuid');
const QRCode = require('qrcode');

// Endpoint to create a new payment and generate a QR code
router.post('/create-payment', async (req, res) => {
  try {
    const { amount } = req.body;
    const token = uuidv4(); // Generate a unique payment token

    // Create a new payment entry in MongoDB
    const newPayment = new Payment({ token, amount });
    await newPayment.save();

    // Generate a QR code with the payment URL containing the token
    const paymentUrl = `http://localhost:3000/pay?token=${token}`;
    const qrCodeImageUrl = await QRCode.toDataURL(paymentUrl);

    res.json({ qrCodeImageUrl, token });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create payment' });
  }
});

// Endpoint to simulate payment processing
router.post('/process-payment/:token', async (req, res) => {
  try {
    const { token } = req.params;
    const payment = await Payment.findOne({ token });

    if (!payment) return res.status(404).json({ error: 'Payment not found' });

    // Simulate a delay and random success or failure
    setTimeout(async () => {
      payment.status = Math.random() > 0.5 ? 'success' : 'failure';
      await payment.save();
      res.json({ status: payment.status });
    }, 2000); // 2-second delay to simulate processing
  } catch (error) {
    res.status(500).json({ error: 'Failed to process payment' });
  }
});

// Endpoint to check payment status
router.get('/payment-status/:token', async (req, res) => {
  try {
    const { token } = req.params;
    const payment = await Payment.findOne({ token });

    if (!payment) return res.status(404).json({ error: 'Payment not found' });
    
    res.json({ status: payment.status });
  } catch (error) {
    res.status(500).json({ error: 'Failed to check payment status' });
  }
});

module.exports = router;
