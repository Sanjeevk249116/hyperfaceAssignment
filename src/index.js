import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import AuthContainer from './AuthProvider/AuthContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContainer>
  
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
  </AuthContainer>

);


