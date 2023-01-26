import React from 'react';
import { useAppSelector } from './store/hooks';
import Container from './UI/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Slider from './components/Slider';
import Testimonials from './components/Testimonials';
import Virtual from './components/Virtual';
import mc from './App.module.css'
import clsx from 'clsx';


function App() {
  const isDark = useAppSelector((state) => state.darkMode.isDarkMode)

  return (
    <div className={clsx(mc.App, { [mc.dark]: isDark })}>
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
