import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import './index.css'
import './Objective.css'
import App from './App.jsx'
import Subtitle from './Subtitle.jsx'
import Objective from './Objective.jsx'
import Education from './Education.jsx'
import TechnicalSkills from './TechncialSkills.jsx'
import TechnicalExperience from './TechnicalExperience.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Subtitle />
    <Objective />
    <Education />
    <TechnicalSkills />
    <TechnicalExperience />
  </StrictMode>,
);
