import React from 'react';
import ReactDOM from 'react-dom';

// import { App } from './bootstrap/App';
// import { App } from './css/App';
// import { App } from './sass/App';
// import { App } from './bem/App';
// import { App } from './css-modules/App';
// import { App } from './css-in-js/App';
import { App } from './tailwind/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
