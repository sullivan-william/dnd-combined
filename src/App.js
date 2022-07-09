import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewCharacter from './components/NewCharacter';
import SignUp from './components/SignUp';
import Login from './components/Login';
import CurrentUserProvider from './contexts/CurrentUser';


function App() {
  return (
    <CurrentUserProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/new_character' element={<NewCharacter />} />
        </Routes>
      </Router>
    </CurrentUserProvider>
  );
}

export default App;