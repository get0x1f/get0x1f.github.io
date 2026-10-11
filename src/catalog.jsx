import React from 'react';
import { createRoot } from 'react-dom/client';
import CatalogApp from './CatalogApp.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CatalogApp />
  </React.StrictMode>
);
