"use client";

import React, { useState } from "react";
import BanknoteIcon from "@/components/icons/BankIcon";
import { useNavigate } from "react-router-dom";

const AlertForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [alertType, setAlertType] = useState("");
  const [alertDate, setAlertDate] = useState<string>("");
  const [alertTime, setAlertTime] = useState<string>("");
  const [alertContent, setAlertContent] = useState("");

  const handleSubmitCheck = () => {
    if (email === "" || alertType === "" || alertDate === "" || alertTime === "" || alertContent === "") {
      alert("Por favor, llene todos los campos");
      return;
    }
  }

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const response = await fetch("http://localhost:5000/schedule-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        alertType,
        alertDate,
        alertTime,
        alertContent,
      }),
    });

    const result = await response.text();
    alert(result);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlertDate(e.target.value);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlertTime(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-[#0077b6] text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BanknoteIcon className="h-8 w-8" />
          <h1 className="text-2xl font-bold">EIC Bank Finances</h1>
        </div>
        <nav className="flex items-center gap-4">
          <nav className="hover:underline">About</nav>
          <nav className="hover:underline">Products</nav>
          <nav className="hover:underline">Contact</nav>
          <button 
            type="submit"
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            onClick={() => navigate("/mainmenu")}
          >
          Atrás
          </button>
        </nav>
        
      </header>
      <main className="flex-1 bg-gray-100 py-12 px-4 md:px-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-black">Sistema de Alertas</h1>
        <div className="bg-white text-black rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Correo Electrónico</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Tipo de Alerta</label>
              <select
                className="w-full px-3 py-2 border rounded"
                value={alertType}
                onChange={(e) => setAlertType(e.target.value)}
              >
                <option value=""></option>
                <option value="Pago Próximo">Pago Próximo</option>
                <option value="Cambio en la Legislación">Cambio en la Legislación</option>
                <option value="General">General</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Fecha de la Alerta</label>
              <input
                type="date"
                className="w-full px-3 py-2 border rounded"
                value={alertDate}
                onChange={handleDateChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Hora de la Alerta</label>
              <input
                type="time"
                className="w-full px-3 py-2 border rounded"
                value={alertTime}
                onChange={handleTimeChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Contenido de la Alerta</label>
              <textarea
                className="w-full px-3 py-2 border rounded"
                value={alertContent}
                onChange={(e) => setAlertContent(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
              onClick={handleSubmitCheck}
            >
              Enviar Alerta
            </button>
          </form>
        </div>
      </main>
      <footer className="bg-[#0077b6] text-white py-4 px-6 flex items-center justify-center">
        <p>&copy; 2024 EIC Bank. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AlertForm;
