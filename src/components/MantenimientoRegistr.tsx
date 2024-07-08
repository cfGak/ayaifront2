"use client";

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import BanknoteIcon from "@/components/icons/BankIcon";
import BuildingIcon from "@/components/icons/BuildingIcon";
import UserIcon from "@/components/icons/UserIcon";

const ManteminetoRegistro: React.FC = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState<string>("");
  const [sueldoBase, setSueldoBase] = useState<number>(0);
  const [tipoAfp, setTipoAfp] = useState<string>("");
  const [porcentajeAfpDefault] = useState<number>(10);
  const [porcentajeAfp, setPorcentajeAfp] = useState<number>(0);
  const [tipoIsapre, setTipoIsapre] = useState<string>("");
  const [porcentajeIsapre, setPorcentajeIsapre] = useState<number>(0);
  const [porcentajeIsapreDefault] = useState<number>(7);
  const [porcentajeSeguros] = useState<number>(2.21);

  const handleUserIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
  };

  const handleSueldoBaseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSueldoBase(parseInt(event.target.value));
  };

  const handlePorcentajeAfpChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPorcentajeAfp(parseFloat(event.target.value));
  };

  const handlePorcentajeIsapreChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPorcentajeIsapre(parseFloat(event.target.value));
  };


  const handleRegistroTrabajadores = () => {
    const AFPtotal = porcentajeAfp + parseFloat(tipoAfp) + porcentajeAfpDefault;
    const IsapreTotal = porcentajeIsapre + porcentajeIsapreDefault;
    const sueldoDescuento = sueldoBase * (AFPtotal + IsapreTotal + porcentajeSeguros) / 100;
    const sueldoTotal = sueldoBase - sueldoDescuento;
    //madar al back el AFPtotal, IsapreTotal, porcentajeSeguros, sueldoTotal (sueldo post descuento)
    alert(
      `Id Trabajador a modificar: ${userId} \n
      Tipo AFP: ${tipoAfp}, Porcentaje APF adicional: ${porcentajeAfp}, Porcentaje AFP Obligatorio: 10 \n porcentaje AFP Total: ${AFPtotal}\n \n
      Tipo ISAPRE: ${tipoIsapre}, Porcentaje ISAPRE adicional: ${porcentajeIsapre}\n
      Porcentaje ISAPRE Base: 7, porcentaje ISAPRE Total: ${IsapreTotal} \n \n
      Porcentaje Seguros: ${porcentajeSeguros}\n \n 
      Sueldo Base: ${sueldoBase}, Descuento Total: ${sueldoDescuento}\n
      Sueldo Total: ${sueldoTotal}`
    );

    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-[#0077b6] text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BanknoteIcon className="h-8 w-8" />
          <h1 className="text-2xl font-bold">EIC Bank Finanzas</h1>
        </div>
        <nav className="flex items-center gap-4">
          <nav className="hover:underline">About</nav>
          <nav className="hover:underline">Products</nav>
          <nav className="hover:underline">Contact</nav>
        </nav>
      </header>
      <main className="flex-1 bg-gray-100 py-12 px-4 md:px-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-black">
          Registro y Mantenimiento de Información de Trabajadores
        </h1>
        <div className="bg-white text-black rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
          <div className="mb-4">
            <label className="block text-gray-700">ID del Usuario</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={userId}
              onChange={handleUserIdChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Sueldo del trabajador</label>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded"
              value={sueldoBase}
              onChange={handleSueldoBaseChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Tipo AFP</label>
            <select
              className="w-full px-3 py-2 border rounded"
              value={tipoAfp}
              onChange={(e) => setTipoAfp(e.target.value)}
            >
              <option value="0"></option>
              <option value="0.49">AFP Uno</option>
              <option value="0.58">AFP Modelo</option>
              <option value="1.16">AFP Planvital</option>
              <option value="1.27">AFP Habitat</option>
              <option value="1.44">AFP Capital</option>
              <option value="1.44">AFP Cuprum</option>
              <option value="1.45">AFP Provida</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Porcentaje AFP (%)</label>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded"
              value={porcentajeAfp}
              onChange={handlePorcentajeAfpChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Tipo ISAPRE</label>
            <select
              className="w-full px-3 py-2 border rounded"
              value={tipoIsapre}
              onChange={(e) => setTipoIsapre(e.target.value)}
            >
              <option value=""></option>
              <option value="Banmédica">Banmédica</option>
              <option value="Consalud">Consalud</option>
              <option value="Cruz Blanca">Cruz Blanca</option>
              <option value="Colmena">Colmena</option>
              <option value="Vida Tres">Vida Tres</option>
              <option value="Nueva Masvida">Nueva Masvida</option>
              <option value="Isalud">Isalud</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Porcentaje ISAPRE (%)</label>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded"
              value={porcentajeIsapre}
              onChange={handlePorcentajeIsapreChange}
            />
          </div>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={handleRegistroTrabajadores}
          >
            Guardar Información
          </button>
        </div>
      </main>
      <footer className="bg-[#0077b6] text-white py-4 px-6 flex items-center justify-center">
        <p>&copy; 2024 EIC Bank. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ManteminetoRegistro;
