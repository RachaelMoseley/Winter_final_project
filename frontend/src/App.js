import React from 'react';
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavBar from './components/AppNavBar';


//Importing the files/functions from the files in src
import AboutMePage from './components/AboutMePage';
import DataAnalysisPage from './components/DataAnalysisPage';
import Header from './components/Header';


//React working with BrowserRouter in order to navigate API based on path
//The paths are the URL to each page app
function App() {
  return (
    <div> 
    <AppNavBar />
    <Routes>
      <Route path="/navbar" element={<AppNavBar />} />
      <Route path="/" element={<Header />} /> 
      <Route path="/about" element={<AboutMePage />}/>
      <Route path="/data" element={<DataAnalysisPage />} />
    </Routes>
    </div>
  );
}

//Make sure to only use one Browser react within my application only use in idex

export default App;
