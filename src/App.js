import React from 'react';
import { PortfolioContextProvider } from './store/portfolioContext';

import RemoveFromDom from './components/RemoveFromDom';
import PageLoadingSpinner from './components/PageLoadingSpinner';
import ContactModal from './components/ContactModal';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <PortfolioContextProvider>
      <RemoveFromDom delay="300">
        <PageLoadingSpinner />
      </RemoveFromDom>
      <main className="page-wrapper">
        <ContactModal />
        <Header />
        <Hero />
        <Services />
        <Portfolio />
      </main>
    </PortfolioContextProvider>
  );
}

export default App;
