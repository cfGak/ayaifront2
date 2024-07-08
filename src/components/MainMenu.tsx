"use client"

import React from 'react';
import { useNavigate } from 'react-router-dom';
import BanknoteIcon from "@/components/icons/BankIcon"
import BuildingIcon from "@/components/icons/BuildingIcon"
import UserIcon from "@/components/icons/UserIcon"
import EmailIcon from "@/components/icons/EmailIcon"
import DocumentIcon from '@/components/icons/DocumentIcon';
const MainMenu: React.FC = () => {
  const navigate = useNavigate();

  const handleAlertClick = () => {
    navigate("/alertform");
  };

  const handleRegiClick = () => {
    navigate("/manteregi");
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-[#0077b6] text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BanknoteIcon className="h-8 w-8" />
          <h1 className="text-2xl font-bold">EIC Bank Finanzas</h1>
        </div>
        <nav className="flex items-center gap-4">
          <nav  className="hover:underline" >
            About
          </nav>
          <nav className="hover:underline" >
            Products
          </nav>
          <nav className="hover:underline" >
            Contact
          </nav>
        </nav>
      </header>
      <main className="flex-1 bg-gray-100 py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-black">Menú Principal</h1>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white text-black rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
            <UserIcon className="h-12 w-12 text-[#0077b6]" />
            <h2 className="text-2xl font-bold mt-4">AFP</h2>
            <p className="text-gray-500 mt-2">Registro y mantenimiento de información de trabajadores.</p>
            <button
             
              className="bg-[#0077b6] text-white rounded-md px-6 py-3 mt-4 hover:bg-[#005a8c] transition-colors"
              onClick={handleRegiClick}
            >
              Ir
            </button>
          </div>
          <div className="bg-white text-black rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
            <EmailIcon className="h-12 w-12 text-[#0077b6]" />
            <h2 className="text-2xl font-bold mt-4">Recordatorio</h2>
            <p className="text-gray-500 mt-2">Envio de recordatorios sobre pagos.</p>
            <button
              
              className="bg-[#0077b6] text-white rounded-md px-6 py-3 mt-4 hover:bg-[#005a8c] transition-colors"
              onClick={handleAlertClick}
            >
              Ir
            </button>
          </div>
          <div className="bg-white text-black rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
            <DocumentIcon className="h-12 w-12 text-[#0077b6]" />
            <h2 className="text-2xl font-bold mt-4">Informe</h2>
            <p className="text-gray-500 mt-2">Creacion de informe de pagos y deducciones.</p>
            <button

              className="bg-[#0077b6] text-white rounded-md px-6 py-3 mt-4 hover:bg-[#005a8c] transition-colors"
              onClick={() => alert('Informe siendo generado WIP')}
            >
              Ir
            </button>
          </div>
          <div className="bg-white text-black rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
            <BanknoteIcon className="h-12 w-12 text-[#0077b6]" />
            <h2 className="text-2xl font-bold mt-4">Pago Electronico</h2>
            <p className="text-gray-500 mt-2">Sistema de pagos electronicos.</p>
            <button
              className="bg-[#0077b6] text-white rounded-md px-6 py-3 mt-4 hover:bg-[#005a8c] transition-colors"
              onClick={() => alert('Redireccionando a interfaz de pago electrónico / webpay WIP')}
            >
              Ir
            </button>
          </div>
        </div>
      </main>
      <footer className="bg-[#0077b6] text-white py-4 px-6 flex items-center justify-center">
        <p>&copy; 2024 EIC Bank. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainMenu;

