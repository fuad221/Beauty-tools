import React from 'react';
import { useAppSelector } from './store/hooks';
import Container from './UI/container/Container';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Products from './components/products/Products';
import Slider from './components/slider/Slider';
import Testimonials from './components/testimonials/Testimonials';
import Virtual from './components/virtual/Virtual';
import mc from './App.module.css'
import clsx from 'clsx';


function App() {
  const isDark = useAppSelector((state) => state.darkMode.isDarkMode)

  return (
    <div className={clsx(mc.App, {[mc.dark]: isDark})}>
      <Container >
        <Header />
        <Hero />
        <Slider />
        <Virtual />
        <Products />
        <Testimonials />
        <Footer />
      </Container>
      </div>
  );
}


export default App;
