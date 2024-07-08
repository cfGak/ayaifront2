"use client"

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from '../components/MainMenu';
import AlertForm from '../components/AlertForm';
import ManteminetoRegistro from '../components/MantenimientoRegistr';
import Login from '../components/Login';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AlertForm />} />
        <Route path ="/mainmenu" element={<MainMenu />} />
        <Route path="/alertform" element={<AlertForm />} />
        <Route path="manteregi" element={<ManteminetoRegistro />} />
      </Routes>
    </Router>
  );
};

export default App;
