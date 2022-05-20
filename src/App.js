import React from 'react';
import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <h1>Testing Updated</h1>
      <h1>{props.Content}</h1>
    </div>
  );
}


export default App;
