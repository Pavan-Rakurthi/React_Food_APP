import Home from "./Home";  
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Cart from "./Cart";
import AboutUs from "./AboutUs";
import PurchaseHistory from "./PurchaseHistory";
import ContactUs from "./ContactUs";
import "./App.css"  
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
function App()
{

  const Navbar = () => {
    const location = useLocation();}
    const cart = useSelector((state)=>state.cart);
    const totalitems  = cart.reduce((sum,item)=> sum + item.quantity, 0);
  return(
    <>
    <GoogleOAuthProvider clientId="206566501463-febjbopgboldepsu8b08kqm1ieih15ar.apps.googleusercontent.com">
      <GoogleLogin/>
    </GoogleOAuthProvider>
    
    
    <BrowserRouter>
    <div class="navbar">
    <Link to="/home">Home</Link>
    <Link to="/veg">Veg</Link>
    <Link to="/nonveg">NonVeg</Link>
    <Link to="/cart">Cart({totalitems})</Link>
    <Link to="/purchase">Purchase History</Link>
    <Link to="/aboutus">AboutUs</Link>
    <Link to="/contactus">ContactUs</Link>
    </div>
      
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/veg" element={<Veg />}/>
          <Route path="/nonveg" element={<Nonveg />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/aboutus" element={<AboutUs />}/>
          <Route path="/purchase" element={<PurchaseHistory />}/>
          <Route path="/contactus" element={<ContactUs/>}/>
             
          
        </Routes>
      </BrowserRouter>
      
    </>
  )
}
export default App;