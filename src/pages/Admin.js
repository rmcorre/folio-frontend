import RemoveFromDom from '../components/RemoveFromDom';
import PageLoadingSpinner from '../components/PageLoadingSpinner';

import PageHeader from '../components/PageHeader';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Socials from '../components/Socials';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import BackToTop from '../components/BackToTop';

function App() {
  return (
    <>
      <RemoveFromDom delay="300">
        <PageLoadingSpinner />
      </RemoveFromDom>
      <PageHeader admin="true" />
      <main className="page-wrapper">
        <Hero />
        <Services />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Socials />
      </main>
      <Footer />
      <ContactModal />
      <BackToTop />
    </>
  );
}

export default App;
