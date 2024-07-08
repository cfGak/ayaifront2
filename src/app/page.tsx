"use client"

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from '../components/MainMenu';
import AlertForm from '../components/AlertForm';
import ManteminetoRegistro from '../components/MantenimientoRegistr';
import Login from '../components/Login';
import Payments from '../components/Payments';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path ="/" element={<MainMenu />} />
        <Route path="/alertform" element={<AlertForm />} />
        <Route path="payment" element={<Payments />} />
        <Route path="manteregi" element={<ManteminetoRegistro />} />
      </Routes>
    </Router>
  );
};

export default App;
