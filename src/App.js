import React from 'react';
import './App.css';
import Onstage from './onStageList'
import participantsList from './participantsList'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Onstage participants={participantsList.participantsList}/>
      </header>
    </div>
  );
}

export default App;
