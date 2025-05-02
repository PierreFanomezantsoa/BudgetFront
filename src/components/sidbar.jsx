import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, DollarSign, CreditCard, Users, PieChart, Settings } from 'lucide-react';

function Sidebar() {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState("");

  const navigationButtons = [
    { icon: <Home size={20} />, text: "Dashboard", path: "/" },
    { icon: <DollarSign size={20} />, text: "Revenus", path: "/revenue" },
    { icon: <CreditCard size={20} />, text: "Dépenses", path: "/donnee" },
    { icon: <Users size={20} />, text: "Famille", path: "/famille" },
    { icon: <PieChart size={20} />, text: "Budget", path: "/budget" },
    { icon: <Settings size={20} />, text: "Paramètres", path: "/parametre" }
  ];

  return (
    <div className="h-full p-4 bg-gray-300">
      <div className="mb-10">
        <h1 className="font-bold text-2xl text-teal-700"><span className="text-gray-700 hidden md:block"><span>Budget </span>Mensuel</span></h1>
      </div>
      <nav className="space-y-2">
        {navigationButtons.map((button, index) => {
          const isActive = location.pathname === button.path;
          return (
            <Link
              key={index}
              to={button.path}
              onClick={() => setActiveButton(button.text)}
              className={`flex items-center p-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r  from-teal-600 to-teal-800 text-white"
                  : "hover:bg-gray-400 text-gray-800"
              }`}
            >
              <span className={`mr-3 px-3 md:px-0 ${isActive ? "text-white" : "text-teal-700"}`}>
                {button.icon}
              </span>
              <span className={`font-medium hidden md:block ${isActive ? "text-white" : "text-teal-700"}`}>
                {button.text}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;
