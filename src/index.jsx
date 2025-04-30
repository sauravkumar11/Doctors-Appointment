// filepath: /src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom';
import App from './App.jsx';
import './index.css';
import AppContextProvider from './context/AppContext.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
      </AppContextProvider>
  </BrowserRouter>,

);