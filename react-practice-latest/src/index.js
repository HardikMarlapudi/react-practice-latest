import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Subtitle from './Subtitle';
import Objective from './Objective.jsx';
import Education from './Education';
import reportWebVitals from './reportWebVitals';
import TechnicalSkills from './TechncialSkills.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Subtitle />
    <Objective />
    <Education />
    <TechnicalSkills />
  </React.StrictMode>
);

reportWebVitals();
