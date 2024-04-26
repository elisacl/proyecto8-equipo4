import  {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { CartProvider } from '../components/contexts/CartContext'

const LayoutPublic2 = () => {

        return(
            <>
                <CartProvider>
                <Navbar/>
                
                <Outlet/> 

                <Footer/>
                </CartProvider>
                
            </>
    
        )
    
    }

export default LayoutPublic2;