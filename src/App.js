import React from 'react';
import { PortfolioContextProvider } from './store/portfolioContext';
// import WOW from 'wow.js';

import './App.css';

import RemoveFromDom from './components/RemoveFromDom';
import PageLoadingSpinner from './components/PageLoadingSpinner';
import ContactModal from './components/ContactModal';
import Header from './components/Header';
import HeroAround from './components/HeroAround';
import ServicesAround from './components/ServicesAround';
import PortfolioAround from './components/PortfolioAround';
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
  // const wow = new WOW();
  // wow.init();

  return (
    <PortfolioContextProvider>
      <RemoveFromDom delay="300">
        <PageLoadingSpinner />
      </RemoveFromDom>
      <main className="page-wrapper">
        <ContactModal />
        <Header />
        <HeroAround />
        <ServicesAround />
        <PortfolioAround />
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
