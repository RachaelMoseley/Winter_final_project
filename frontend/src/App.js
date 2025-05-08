import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
function App() {
  return (
    <div className="App">
      <Button style={{ color: 'black', backgroundColor: 'lightblue', fontSize: '48x', position: 'fixed', textAlign: 'center', left: '50px'}}>About me page</Button>

      <header className="App-header">
        <h1 style={{ fontSize: '48x', postion: 'fixed', textAlign: 'center', bottom: '50px' }}>
        Water Quality Analysis
        </h1>
        <h5>
          Welcome!
        </h5>
      <div class="button-container">
        <button style={{ fontSize: '18px', marginRight: '10px'}}>Select Water Waterbody Name</button>
        <button style={{ fontSize: '18px'}}>Select Analysis Type</button>
      </div>
        <Button style={{ color: 'black', backgroundColor: 'lightblue'}}>Submit</Button>
        
      </header>
      
    </div>
  );
}

export default App;
