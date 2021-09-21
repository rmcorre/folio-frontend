import React from 'react';

import RemoveFromDom from '../components/RemoveFromDom';
import PageLoadingSpinner from '../components/PageLoadingSpinner';

import ContactModal from '../components/ContactModal';
import DocumentHeader from '../components/DocumentHeader';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Socials from '../components/Socials';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

function App() {
  return (
    <>
      <RemoveFromDom delay="300">
        <PageLoadingSpinner />
      </RemoveFromDom>
      <DocumentHeader />
      <main className="page-wrapper">
        <ContactModal />
        <Hero />
        <Services />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Socials />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
