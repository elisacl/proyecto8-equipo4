import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Navbar from '../../Navbar/Navbar';
import Catalogue from '../../Catalogue/Catalogue';
import Carousel from '../../Carousel/Carousel';
import ShoppingCart from '../../ShoppingCart/ShoppingCart';
import Footer from '../../Footer/Footer';
import Modal from '../../Modal/Modal';


const GeneralGallery = () => {
 const { isOpen, openModal, closeModal } = useContext(CartContext);

 return (
    <div>
      
      {/* <Navbar /> */}
     <Carousel/>
     <Catalogue/> 
       <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <ShoppingCart/>
        
      </Modal> 
     <Footer/> 
    </div>
 )
}

export default GeneralGallery;