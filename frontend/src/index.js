import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MemoriesContextProvider } from './context/MemoriesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MemoriesContextProvider>
      <App />
    </MemoriesContextProvider>
  </React.StrictMode>
);
