import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProfileContextProvider } from './store/profileContext';
import ProtectedRoute from './components/auth/protected-route';

import Home from './pages/Home';
import ResumeMobile from './pages/Resume';
import Admin from './pages/Admin';

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
