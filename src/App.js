import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewCharacter from './components/NewCharacter';
import SignUp from './components/SignUp';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/new_character' element={<NewCharacter />} />
      </Routes>
    </Router>
  );
}

export default App;