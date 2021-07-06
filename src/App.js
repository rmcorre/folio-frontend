import React from 'react';
import { PortfolioContextProvider } from './store/portfolioContext';

import './App.css';

import Preloader from './components/Preloader';
import ContactModal from './components/ContactModal';
import Header from './components/Header';
import HeroAround from './components/HeroAround';
import ServicesAround from './components/ServicesAround';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import IntroVideo from './components/IntroVideo';
import PricingTable from './components/PricingTable';
import LatestNews from './components/LatestNews';
import NewsLetter from './components/NewsLetter';
import Brand from './components/Brand';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';

function App() {
  return (
    <PortfolioContextProvider>
      <Preloader />
      <main className="page-wrapper">
        <ContactModal />
        <Header />
        <HeroAround />
        <ServicesAround />
        {/* <Hero /> */}
        {/* <Services />
        <AboutUs />
        <IntroVideo />
        <PricingTable />
        <LatestNews />
        <NewsLetter />
        <Brand />
        <Footer />
        <ScrollTop /> */}
      </main>
    </PortfolioContextProvider>
  );
}

export default App;
