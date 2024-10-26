const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const paymentRoutes = require('./routes/paymentRouts');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Atlas connection string
const dbURI = 'mongodb+srv://aswinthulasi007:KhXjkh5Ils1EtGmo@cluster0.ikacs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB Atlas
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('MongoDB Atlas connection error:', error));

// Payment routes
app.use('/api', paymentRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
