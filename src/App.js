import React from "react";
import Top from './components/top/Top';
import Main from './components/middle/Main';
import Foot from './components/foot/Foot';
import "./App.css";


function App() {
  return (
    <div className="App">
      <Top />
      <Main />
      <Foot />
    </div>
  );
}

export default App;
