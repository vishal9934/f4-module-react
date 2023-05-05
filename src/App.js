import React from 'react'
import LoginPage from './components/LoginPage';
import Profile from './components/ProfilePage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
