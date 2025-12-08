import React from 'react';
import Navbar from './components/navbar';
import Home from './pages/home';
import ProductsMarquee from './components/productmarquee';
const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <ProductsMarquee/>
    </div>
  );
};

export default App;