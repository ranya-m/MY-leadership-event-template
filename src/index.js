import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Button from './Components/Button/button.jsx';
// import Logo from './Components/Logo/logo.jsx';
// import Title from './Components/Titles/titles.jsx';
import Homepage from './Components/Homepage/homepage.jsx';
import Story from './Components/OurStory/our-story.jsx';
import Speakers from "./Components/speakers/speakers";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Homepage></Homepage>
<Story/>
<Speakers/>
  </React.StrictMode>
);

