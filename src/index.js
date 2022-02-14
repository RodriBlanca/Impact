import React from 'react';
import ReactDOM from 'react-dom';
// Component
import Impact from './Impact.js';
// React-router-dom
import { BrowserRouter as Router } from 'react-router-dom';
// CSS
import './index.css';


ReactDOM.render(
  <Router>
    <Impact />
  </Router>,
  document.getElementById('root')
);
