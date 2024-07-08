"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BanknoteIcon from "@/components/icons/BankIcon";
import BuildingIcon from "@/components/icons/BuildingIcon";
import UserIcon from "@/components/icons/UserIcon";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const handleLogin = () => {
    /** 
    if(userName === "" || userPassword === ""){
        alert("Por favor, ingrese un nombre de usuario y contraseña");
        return;
        }
    if(userName !== "admin" || userPassword !== "admin"){
        alert("Usuario o contraseña incorrectos");
        return;
    }
        */
    alert(`Bienvenido`);
    navigate("/mainmenu");
  };

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  const handleUserPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserPassword(event.target.value);
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
          Login Finanzas
        </h1>
        <div className="bg-white text-black rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
          <div className="mb-4">
            <label className="block text-gray-700">User Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={userName}
              onChange={handleUserNameChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Constraseña</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded"
              value={userPassword}
              onChange={handleUserPasswordChange}
            />
          </div>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 justify-center"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </main>
      <footer className="bg-[#0077b6] text-white py-4 px-6 flex items-center justify-center">
        <p>&copy; 2024 EIC Bank. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
