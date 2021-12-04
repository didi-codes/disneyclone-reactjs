import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Details from './components/Details';
import Login from './components/Login'
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />}
          />
          <Route path='/details'element={<Details />}/>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
