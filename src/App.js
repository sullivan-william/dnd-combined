import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewCharacter from './components/NewCharacter';
import SignUp from './components/SignUp';
import Login from './components/LogIn';
import CurrentUserProvider from './contexts/CurrentUser';
import CharacterProvider from './contexts/Character';
import Navigation from './components/Navigation';
import CharactersShowPage from './components/CharactersShowPage';
import EditCharacter from './components/EditCharacter';
import UserHomePage from './components/UserHomePage';


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
            <Route path='/characters_page/:userId' element={<CharactersShowPage />} />
            <Route path='/characters/edit/:characterId' element={<EditCharacter />} />
            <Route path='/home' element={<UserHomePage />} />
          </Routes>
        </Router>
      </CharacterProvider>
    </CurrentUserProvider>
  );
}

export default App;