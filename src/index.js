import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';

document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');

  if (!root) {
    root = document.createElement('div').setAttribute('id', 'root');
  }

  ReactDOM.render(<App />, root);
})