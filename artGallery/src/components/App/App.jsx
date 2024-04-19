import React from 'react';
import GeneralGallery from '../Views/GeneralGallery/GeneralGallery';
import { CartProvider } from '../../contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <GeneralGallery />
    </CartProvider>
  );
}

export default App;