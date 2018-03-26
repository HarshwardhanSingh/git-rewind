import React from 'react';
import ReactDOM from 'react-dom';

import ProviderComponent from './provider';

document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');

  if (!root) {
    root = document.createElement('div').setAttribute('id', 'root');
    document.body.appendChild(root);
  }

  ReactDOM.render(<ProviderComponent />, root);
})