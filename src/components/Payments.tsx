"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [userInfo, setUserInfo] = useState<null | { // Corrected type
    name: string;
    email: string;
    accountNumber: string;
  }>(null);
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");

  const handleSearch = async () => {
    // Simula la búsqueda de usuario
    const result = await fetchUserInfo(searchTerm);
    setUserInfo(result);
  };

  const fetchUserInfo = async (searchTerm: string) => {
    // Lógica para buscar el usuario en el backend
    /** 
    const response = await fetch("https://backendpoint/users/${searchTerm}", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    
      // Check if the response is successful
      if (response.ok) {
        const data = await response.json();
        return {
            name: data.name,
            email: data.email,
            accountNumber: data.accountNumber,
        }; // Return the user data
      } else {
        // Handle error cases (e.g., user not found)
        if (response.status === 404) {
          console.error(`Usuario con nombre "${name}" no encontrado.`);
          return null; // Return null to indicate no user found
        } else {
          console.error(`Error al buscar usuario: ${response.statusText}`);
          return null; // Return null to indicate an error
        }
    }
    */
    return {
      name: "Juan Pérez",
      email: "juan.perez@example.com",
      accountNumber: "1234567890",
    };
  };

  const handlePayment = async (event: React.FormEvent) => {
    event.preventDefault();
    if (password === "") {
      alert("Por favor, ingrese su contraseña.");
      return;
    }

    // Implementa la lógica para procesar el pago
    const response = await processPayment();
    alert(response);
  };

  const processPayment = async () => {
    // Lógica para procesar el pago en el backend
    return "Pago realizado con éxito.";
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-[#0077b6] text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">EIC Bank Finances</h1>
        </div>
        <nav className="flex items-center gap-4">
          <nav className="hover:underline">About</nav>
          <nav className="hover:underline">Products</nav>
          <nav className="hover:underline">Contact</nav>
          <button 
            type="button"
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            onClick={() => navigate("/mainmenu")}
          >
            Atrás
          </button>
        </nav>
      </header>
      <main className="flex-1 bg-gray-100 py-12 px-4 md:px-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-black">Realizar Pago</h1>
        <div className="bg-white text-black rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
          <div className="mb-4 w-full">
            <label className="block text-gray-700">Buscar Usuario</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white py-2 px-4 mt-2 rounded hover:bg-blue-700"
              onClick={handleSearch}
            >
              Buscar
            </button>
          </div>
          {userInfo && (
            <>
              <div className="mb-4 w-full">
                <label className="block text-gray-700">Nombre</label>
                <p className="w-full px-3 py-2 border rounded">{userInfo.name}</p>
              </div>
              <div className="mb-4 w-full">
                <label className="block text-gray-700">Correo Electrónico</label>
                <p className="w-full px-3 py-2 border rounded">{userInfo.email}</p>
              </div>
              <div className="mb-4 w-full">
                <label className="block text-gray-700">Número de Cuenta</label>
                <p className="w-full px-3 py-2 border rounded">{userInfo.accountNumber}</p>
              </div>
              <form onSubmit={handlePayment} className="w-full">
                <div className="mb-4">
                  <label className="block text-gray-700">Monto</label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Mensaje</label>
                  <textarea
                    className="w-full px-3 py-2 border rounded"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Contraseña</label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Confirmar Pago
                </button>
              </form>
            </>
          )}
        </div>
      </main>
      <footer className="bg-[#0077b6] text-white py-4 px-6 flex items-center justify-center">
        <p>&copy; 2024 EIC Bank. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PaymentPage;
