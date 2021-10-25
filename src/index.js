// ========== IMPORT DEPENDENCIES ==========
import React from 'react';
import ReactDOM from 'react-dom';
// import SCSS file to be source of styling
import './styles.scss';
// import router
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ========== WRAP Everything in the ROUTER ==========
// HOC pattern - higher order component 
// higher order functions accept a function as an argument or returns a function (examples - forEach() and all methods on arrays are higher order functions that accept a callback function as an argument)
// higher order components (HOCs) accept or return another component
ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
