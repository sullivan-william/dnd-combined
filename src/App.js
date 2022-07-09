import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from './components/HomeView';
import Spells from './components/Spells'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='spells/:id' element={<Spells />} />
      </Routes>
    </Router>
  );
}

export default App;