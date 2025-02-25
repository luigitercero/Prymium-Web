import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambia 'react-dom' a 'react-dom/client'
import App from '@routes/App';

// Crear el root
const root = ReactDOM.createRoot(document.getElementById('app'));

// Renderizar el componente
root.render(<App />);
