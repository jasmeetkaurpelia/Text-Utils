import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router here
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component with Router
root.render(
  <React.StrictMode>
    <Router basename="/Text-Utils"> {/* Set basename for GitHub Pages */}
      <App />
    </Router>
  </React.StrictMode>
);

// Measure performance in your app
reportWebVitals();
