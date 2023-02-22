import './App.css';
import HelloWorldComponent from './component/HelloWorldComponent';
import HelloWorldCover from './component/HelloWorldCover';
import React from 'react';

function App() {
  return (
    <div className="App">
      <HelloWorldCover>
        <HelloWorldComponent firstName="Andrew" lastName="Brian" age="30"/>
      </HelloWorldCover>
    </div>
  );
}

export default App;
