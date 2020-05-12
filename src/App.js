import React from 'react';
import './App.css';
import Onstage from './onStageList'
import participantsList from './participantsList'
import AllParticipant from './AllParticipants'
import InSessionList from './inSessionList'
import LeftSessionList from './leftSessionList';
import Stage from './stage'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Onstage participants={participantsList.participantsList}/>
        <InSessionList participants={participantsList.participantsList}/>
        <LeftSessionList participants={participantsList.participantsList}/>
        <Stage participants={participantsList.participantsList}/>
      </header>
    </div>
  );
}

export default App;
