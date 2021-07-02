import './App.css';

import Preloader from './components/Preloader';
import Header from './components/Header';
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
    <>
      <Preloader />
      <Header />
      <Hero />
      <Services />
      <AboutUs />
      <IntroVideo />
      <PricingTable />
      <LatestNews />
      <NewsLetter />
      <Brand />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;
