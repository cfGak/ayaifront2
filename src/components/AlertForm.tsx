"use client"

import React, { useState } from 'react';

const AlertForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [alertType, setAlertType] = useState('');
  const [alertDate, setAlertDate] = useState<string>('');
  const [alertContent, setAlertContent] = useState('');

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Correo: ${email}, Tipo de alerta: ${alertType}, Fecha: ${alertDate}, Contenido: ${alertContent}`);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlertDate(e.target.value);
  };

  const formatDate = (inputDate: string): string => {
    const [year, month, day] = inputDate.split('-');
    return `${day}-${month}-${year}`;
  };

  const handleBlur = () => {
    setAlertDate(formatDate(alertDate));
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6">Sistema de Alertas</h1>
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
            <option value="pago">Pago Próximo</option>
            <option value="legislacion">Cambio en la Legislación</option>
            <option value="general">General</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Fecha de la Alerta</label>
          <input 
            type="date" 
            className="w-full px-3 py-2 border rounded" 
            value={alertDate}
            onChange={handleDateChange}
            onBlur={handleBlur}
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
        >
          Enviar Alerta
        </button>
      </form>
    </div>
  );
};

export default AlertForm;
