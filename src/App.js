import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from './components/HomeView';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeView />} />
      </Routes>
    </Router>
  );
}

export default App;