import React from 'react';
import Navbar from './components/navbar';
import Home from './pages/home';
import ProductsMarquee from './components/productmarquee';
import Testimonials from './components/testimonials';
import ContactH from './components/contactH';
import Footer from './components/footer';
const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <ProductsMarquee/>
      <Testimonials/>
      <ContactH/>
      <Footer/>
    </div>
  );
};

export default App;