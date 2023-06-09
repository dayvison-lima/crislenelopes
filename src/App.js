import React from 'react';
import LandingProvider from './context/LandingProvider';
import Header from './components/Header';
import ContactButton from './components/ContactButton';
import BackgroundFixed from './components/BackgroundFixed';
import './App.css';
import DescriptionBlock from './components/DescriptionBlock';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <LandingProvider>
        <Header />
        <BackgroundFixed />
        <DescriptionBlock />
        <Body />
        <ContactButton />
      </LandingProvider>
    </div>
  );
}

export default App;
