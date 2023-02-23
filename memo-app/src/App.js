import './App.css';
import HelloWorldComponent from './component/HelloWorldComponent';
import React from 'react';

function App() {
  return (
    <div className="App">
      <HelloWorldComponent firstName="Andrew" lastName="Brian" age="30"/>
    </div>
  );
}

export default App;
