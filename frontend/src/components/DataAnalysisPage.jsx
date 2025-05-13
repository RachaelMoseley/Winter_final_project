import React from 'react';
import DisplayChart from './Chart';

function DataAnalysisPage() {
    return (
        <div className='DataAnalysis'>
            <header className='app-header'>
                <h1 style={{ fontSize: '48px', bottom: '50px', marginBottom:'50px', marginLeft:'500px', fontWeight:'bold' }}>
                    Data Analysis Page
                </h1>

<div style={{display: 'felx', gap: '50px', marginLeft:'130px', marginTop:'20px' }}>
    <div>
        <h3 style={{ fontWeight:'bold '}}>Data Analysis:</h3>
            <div style={{ width:'300px', textAlign: 'left', marginLeft:'130px', padding:'20px', border: '2px solid #ccc', borderRadius:'8px', overflowY:'auto'}}>
                <h4>Water quality: ???
                    ????? 100%, Numbers, Numbers, Numbers, Numbers, Numbers, Numbers, Numbers, 10000
                </h4>
            </div>
            <div>
                <h3 style={{fontWeight:'bold'}}>Display: </h3>
                    <DisplayChart />
                </div>
            </div>
            </div>
            </header>
            
        </div>
    );
}

export default DataAnalysisPage;