import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import PageLoadingSpinner from '../PageLoadingSpinner';

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <PageLoadingSpinner />,
    })}
    {...args}
  />
);

export default ProtectedRoute;
