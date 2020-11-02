import React from 'react';
import './App.css';
import GameContainer from "./components/Game/GameContainer";
import {Route} from "react-router-dom";
import HistoryContainer from "./components/History/HistoryContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
      <div>
          <Navbar/>
          <Route exact path="/" render={() => <GameContainer />}/>
          <Route path="/history" render={() => <HistoryContainer />}/>
      </div>
  );
}

export default App;
