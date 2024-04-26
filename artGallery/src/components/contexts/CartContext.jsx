
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider= ({ children }) => {
 const [cart, setCart] = useState([]);
 const [isOpen, setIsOpen] = useState(false);

 const openModal = () => setIsOpen(true);
 const closeModal = () => setIsOpen(false);

 return (
    <CartContext.Provider value={{ cart, setCart, isOpen, openModal, closeModal }}>
      {children}
    </CartContext.Provider>
 );
};


