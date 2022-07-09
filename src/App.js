import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from './components/HomeView';
import SignUp from './components/SignUp';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;