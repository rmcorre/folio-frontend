import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProfileContextProvider } from './store/profileContext';
import ProtectedRoute from './components/auth/protected-route';

// import RemoveFromDom from './components/RemoveFromDom';
// import PageLoadingSpinner from './components/PageLoadingSpinner';
import Home from './pages/Home';
import ResumeMobile from './pages/Resume';
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
    <ProfileContextProvider>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/resume">
          <ResumeMobile />
        </Route>
        <ProtectedRoute path="/Admin" component={Admin} />
      </Switch>
    </ProfileContextProvider>
  );
}

export default App;
