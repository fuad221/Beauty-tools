import React from 'react';
import Container from './UI/container/Container';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Products from './components/products/Products';
import Slider from './components/slider/Slider';
import Testimonials from './components/testimonials/Testimonials';
import Virtual from './components/virtual/Virtual';

function App() {
  return (
    <Container >
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonials />
      <Footer />
    </Container>
  );
}

export default App;
