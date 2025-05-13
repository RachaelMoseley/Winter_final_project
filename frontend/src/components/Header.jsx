import React from 'react'
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <header className="App-header">
        <h1 style={{ fontSize: '48px', postion: 'fixed', textAlign: 'center', bottom: '50px', fontWeight:'bold' }}>
        Water Quality Analysis
        </h1>
        <h5>
          Welcome!
        </h5>
      <div className="button-container">
        <button style={{ fontSize: '18px', marginRight: '10px'}}>Select Water Waterbody Name</button>
        <button style={{ fontSize: '18px'}}>Select Analysis Type</button>
      </div>
        <Button style={{ color: 'black', backgroundColor: 'lightblue'}}>Submit</Button>

      </header>
  );
}

export default Header;