import React, { useState } from 'react';
import axios from 'axios';

function Home() {
  const [amount, setAmount] = useState('');
  const [qrCodeImage, setQrCodeImage] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState('');

  // Create payment and get QR code
  const createPayment = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/create-payment', { amount });
      setQrCodeImage(response.data.qrCodeImageUrl);
    } catch (error) {
      console.error('Error creating payment:', error);
    }
  };

  // Check payment status
  const checkPaymentStatus = async (token) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/payment-status/${token}`);
      setPaymentStatus(response.data.status);
    } catch (error) {
      console.error('Error checking payment status:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Eazy-Pay by Aswin - A Different Payment Gateway</h2>
      <input style={{border:'15px blue', backgroundColor:'#EBEBEB', padding:'12px 5px', borderRadius:'10px', marginRight:'10px',width:'300px'}}
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button style={{color:'blue', backgroundColor:'#EBEBEB'}} onClick={createPayment}>Generate QR Code</button>

      {qrCodeImage && (
        <div>
          <h3>Scan this QR Code to make payment</h3>
          <img src={qrCodeImage} alt="Payment QR Code" style={{ marginTop: '20px' }} />
          <button style={{color:'blue', backgroundColor:'#EBEBEB'}} onClick={() => checkPaymentStatus(response.data.token)}>
            Check Payment Status
          </button>
          {paymentStatus && <h4>Payment Status: {paymentStatus}</h4>}
        </div>
      )}
    </div>
  );
}

export default Home;
