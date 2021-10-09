import { useState } from 'react';

import RemoveFromDom from '../components/RemoveFromDom';
import PageLoadingSpinner from '../components/PageLoadingSpinner';

import PageHeader from '../components/PageHeader';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Socials from '../components/Socials';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import BackToTop from '../components/BackToTop';

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <RemoveFromDom delay="300">
        <PageLoadingSpinner />
      </RemoveFromDom>
      <PageHeader setModalShow={setModalShow} />
      <main className="page-wrapper">
        <Hero />
        <Services />
        <Skills />
        <Portfolio />
        <Socials />
      </main>
      <Footer />
      <ContactModal modalShow={modalShow} setModalShow={setModalShow} />
      <BackToTop />
    </>
  );
}

export default App;
