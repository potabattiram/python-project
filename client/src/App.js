import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Appbar from './Appbar';
import Dashboard from './Components/Dashboard';
import Reports from './Components/Reports';
import Analytics from './Components/Analytics';
import './App.css';

function App() {
  return (
    <>
    <Appbar/>
      <Routes>
        <Route exact path="/" element={<Dashboard/>}/> 
        <Route exact path="/reports" element={<Reports/>}/> 
        <Route exact path="/analytics" element={<Analytics/>}/> 
      </Routes>
    </>
  );
}

export default App;
