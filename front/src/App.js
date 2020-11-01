import React from 'react';
import './App.css';
import GameContainer from "./components/Game/GameContainer";
import {Route} from "react-router-dom";
import HistoryContainer from "./components/History/HistoryContainer";

function App() {
  return (
      <div>
        <Route path="/game" render={() => <GameContainer />}/>
        <Route path="/history" render={() => <HistoryContainer />}/>
      </div>
  );
}

export default App;
