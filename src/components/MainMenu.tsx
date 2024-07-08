"use client"

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { jsPDF } from 'jspdf';
import BanknoteIcon from "@/components/icons/BankIcon";
import UserIcon from "@/components/icons/UserIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import DocumentIcon from '@/components/icons/DocumentIcon';

const contributions = [
  {
    "employeeId": "EMP001",
    "date": "2023-01-15",
    "amount_afp": 150000,
    "amount_isapre": 80000,
    "amount_seguro": 20000,
    "amount_total": 250000
  },
  {
    "employeeId": "EMP002",
    "date": "2023-02-10",
    "amount_afp": 120000,
    "amount_isapre": 60000,
    "amount_seguro": 15000,
    "amount_total": 195000
  },
  {
    "employeeId": "EMP003",
    "date": "2023-03-05",
    "amount_afp": 180000,
    "amount_isapre": 90000,
    "amount_seguro": 30000,
    "amount_total": 300000
  },
  {
    "employeeId": "EMP004",
    "date": "2023-04-20",
    "amount_afp": 160000,
    "amount_isapre": 70000,
    "amount_seguro": 25000,
    "amount_total": 255000
  },
  {
    "employeeId": "EMP005",
    "date": "2023-05-15",
    "amount_afp": 140000,
    "amount_isapre": 65000,
    "amount_seguro": 22000,
    "amount_total": 227000
  }
];

const MainMenu: React.FC = () => {
  const navigate = useNavigate();

  const handleAlertClick = () => {
    navigate("/alertform");
  };

  const handleRegiClick = () => {
    navigate("/manteregi");
  };

  const handlePaymentClick = () => {
    navigate("/payment");
  };

  const handleGenerateDocClick = () => {
    const contributions: {
      employeeId: string;
      date: string;
      amount_afp: number;
      amount_isapre: number;
      amount_seguro: number;
      amount_total: number;
    }[] = [
      {
        "employeeId": "EMP001",
        "date": "2023-01-15",
        "amount_afp": 150000,
        "amount_isapre": 80000,
        "amount_seguro": 20000,
        "amount_total": 250000
      },
      {
        "employeeId": "EMP002",
        "date": "2023-02-10",
        "amount_afp": 120000,
        "amount_isapre": 60000,
        "amount_seguro": 15000,
        "amount_total": 195000
      },
      {
        "employeeId": "EMP003",
        "date": "2023-03-05",
        "amount_afp": 180000,
        "amount_isapre": 90000,
        "amount_seguro": 30000,
        "amount_total": 300000
      },
      {
        "employeeId": "EMP004",
        "date": "2023-04-20",
        "amount_afp": 160000,
        "amount_isapre": 70000,
        "amount_seguro": 25000,
        "amount_total": 255000
      },
      {
        "employeeId": "EMP005",
        "date": "2023-05-15",
        "amount_afp": 140000,
        "amount_isapre": 65000,
        "amount_seguro": 22000,
        "amount_total": 227000
      }
    ];
    try {
      //const response = await axios.get('/api/contributions'); // Ajusta la URL según sea necesario
      //const contributions = response.data;
      generatePDF(contributions);
    } catch (error) {
      console.error('Error al obtener las contribuciones:', error);
    }
  };

  const generatePDF = (data: typeof contributions) => {
    const doc = new jsPDF();
    let yPosition = 10;

    doc.setFontSize(12);
    doc.text('Reporte de Contribuciones', 10, yPosition);
    yPosition += 10;

    // Crear tabla de contribuciones
    // Aquí se debe verificar que TypeScript reconozca autoTable
    (doc as any).autoTable({
      startY: yPosition,
      head: [['ID', 'Fecha', 'AFP', 'ISAPRE', 'Seguro', 'Total']],
      body: data.map(contribution => [
        contribution.employeeId,
        new Date(contribution.date).toLocaleDateString(),
        contribution.amount_afp.toString(),
        contribution.amount_isapre.toString(),
        contribution.amount_seguro.toString(),
        contribution.amount_total.toString()
      ]),
      theme: 'grid'
    });

    // Guardar el documento PDF
    doc.save('reporte_contribuciones.pdf');
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
            onClick={() => navigate("/")}
          >
          Salir
          </button>
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
              onClick={handleGenerateDocClick}
            >
              Generar
            </button>
          </div>
          <div className="bg-white text-black rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
            <BanknoteIcon className="h-12 w-12 text-[#0077b6]" />
            <h2 className="text-2xl font-bold mt-4">Pago Electronico</h2>
            <p className="text-gray-500 mt-2">Sistema de pagos electronicos.</p>
            <button
              className="bg-[#0077b6] text-white rounded-md px-6 py-3 mt-4 hover:bg-[#005a8c] transition-colors"
              onClick={handlePaymentClick}
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

