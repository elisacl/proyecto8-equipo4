import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Catalogue from '../../Catalogue/Catalogue';
import Carousel from '../../Carousel/Carousel';
import Footer from '../../Footer/Footer';

const GeneralGallery = () => {
  return (
    <div>
     <Navbar/>
     <Carousel/>
     <Catalogue/>
     <Footer/>
    </div>
  )
}

export default GeneralGallery