import React from 'react';
import './App.css';
import BarSign from './components/BarSign';
import Intro from './components/Intro';
import BreweryInfo from './components/BreweryInfo';

function App() {
  return (
    <div className="App">
      <header className="App-body">
        <Intro/>

        <BarSign/>

        <p className="script">please remember to drink responsibly
          {/* <br></br> and support local businesses. */}
        </p>

        <BreweryInfo />        

      </header>
    </div>
  );
}

export default App;
