import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import './assets/css/vendor/vendor.min.css';
// import './assets/css/plugins/plugins.min.css';
// import './assets/css/style.min.css';
// import './assets/js/vendor/jquery-3.5.1.min';
// import './assets/js/vendor/vendor.min.js';
// import './assets/js/plugins/plugins.min.js';
// import './assets/js/main.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
