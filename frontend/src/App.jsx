// App.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar component
import Home from './components/Home'; // Home component
import Aboutus from './components/Aboutus'; // About Us component
import Services from './components/Services'; // Services component
import Contactus from './components/ContactUs'; // Contact Us component
import Shop from './components/Shop'; // Shop component
import Carpainter from './components/Carpainter'; // Carpainter component
import Restoration from './components/Restoration'; // Restoration component
import Logout from './components/Logout'; // Logout component
import Steel from './components/Steel'; // Steel category component
import Wood from './components/Wood'; // Wood category component
import Glass from './components/Glass'; // Glass category component
import { Login } from './pages/auth/Login';
import { SignUp } from './pages/auth/SignUp';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/aboutus" element={<Aboutus />} /> {/* About Us route */}
        <Route path="/services" element={<Services />} /> {/* Services route */}
        <Route path="/carpainter" element={<Carpainter />} /> {/* Carpainter route */}
        <Route path="/restoration" element={<Restoration />} /> {/* Restoration route */}
        <Route path="/shop" element={<Shop />} /> {/* Shop route */}
        <Route path="/shop/steel" element={<Steel />} /> {/* Steel category route */}
        <Route path="/shop/wood" element={<Wood />} /> {/* Wood category route */}
        <Route path="/shop/glass" element={<Glass />} /> {/* Glass category route */}
        <Route path="/contactus" element={<Contactus />} /> {/* Contact Us route */}
        <Route path="/login" element={<Login />} /> {/* Login route */}
        <Route path="/logout" element={<Logout />} /> {/* Logout route */}
        <Route path="/signup" element={<SignUp />} /> {/* Signup route */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
