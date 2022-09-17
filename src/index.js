import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ModalContextProvider from './context/ModalContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModalContextProvider>
  </React.StrictMode>
);
