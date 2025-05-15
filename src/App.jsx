import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Routing from './Routing';



const App = () => {
  return (
    <div>
    <Router>
     
      <Navbar />
      <div className="container mt-4">
       <Routing/>
      </div>
    </Router>
    </div>
  );
};

export default App;
