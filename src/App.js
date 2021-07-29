import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PortfolioContextProvider } from './store/portfolioContext';
import ProtectedRoute from './components/auth/protected-route';

// import RemoveFromDom from './components/RemoveFromDom';
// import PageLoadingSpinner from './components/PageLoadingSpinner';
import Home from './pages/Home';
import ResumeMobile from './components/Resume/ResumeMobile';
import Admin from './pages/Admin';
// import ContactModal from './components/ContactModal';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Services from './components/Services';
// import Skills from './components/Skills';
// import Portfolio from './components/Portfolio';
// import Testimonials from './components/Testimonials';
// import Socials from './components/Socials';
// import Footer from './components/Footer';
// import BackToTop from './components/BackToTop';

function App() {
  return (
    <PortfolioContextProvider>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/resume">
          <ResumeMobile />
        </Route>
        <ProtectedRoute path="/Admin" component={Admin} />
      </Switch>
    </PortfolioContextProvider>
  );
}

export default App;
