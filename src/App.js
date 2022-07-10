import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewCharacter from './components/NewCharacter';
import SignUp from './components/SignUp';
import Login from './components/Login';
import CurrentUserProvider from './contexts/CurrentUser';
import CharacterProvider from './contexts/Character';
import Navigation from './components/Navigation';


function App() {
  return (
    <CurrentUserProvider>
      <CharacterProvider>
        <Router>
          <Navigation />
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='signup' element={<SignUp />} />
              <Route path='/new_character' element={<NewCharacter />} />
            </Routes>
        </Router>
      </CharacterProvider>
    </CurrentUserProvider>
  );
}

export default App;