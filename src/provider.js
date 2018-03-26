import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App/App';

const ProviderComponent = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
);

export default ProviderComponent;