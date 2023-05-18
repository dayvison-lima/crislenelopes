import React from 'react';
import LandingProvider from './context/LandingProvider';
import './App.css';

function App() {
  return (
    <div className="App">
      <LandingProvider>
        <span>oi</span>
      </LandingProvider>
    </div>
  );
}

export default App;
