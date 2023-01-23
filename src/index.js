import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/global.scss';
import App from '~/components/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from '~/components/ScrollToTop/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      <ScrollToTop />
    </Router>
  </React.StrictMode>
);
