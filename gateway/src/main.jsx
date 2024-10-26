import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Only import BrowserRouter here
import App from './App';
import './index.css'; // Global styles if any

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Only Router here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
