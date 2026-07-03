import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  DollarSign,
  CreditCard,
  Users,
  PieChart,
  Settings,
  Menu,
} from "lucide-react";

function Sidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const navigationButtons = [
    { icon: <Home size={20} />, text: "Home", path: "/" },
    { icon: <DollarSign size={20} />, text: "Revenue", path: "/revenue" },
    { icon: <CreditCard size={20} />, text: "Dépenses", path: "/donnee" },
    { icon: <Users size={20} />, text: "Famille", path: "/famille" },
    { icon: <PieChart size={20} />, text: "Budget", path: "/budget" },
    { icon: <Settings size={20} />, text: "Paramètres", path: "/parametre" },
  ];

  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside
        className={`
          hidden md:flex
          h-screen
          bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900
          shadow-2xl
          transition-all duration-300
          flex-col
          ${collapsed ? "w-20" : "w-64"}
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between h-20 px-3 border-b border-slate-700">
          {!collapsed && (
            <div>
              <h1 className="text-xl font-bold">
                <span className="text-teal-400">Budget</span>{" "}
                <span className="text-white">Familial</span>
              </h1>
              <p className="text-xs text-slate-400">Finance IA</p>
            </div>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg bg-slate-700 text-white hover:bg-slate-600"
          >
            <Menu size={18} />
          </button>
        </div>

        {/* NAV */}
        <nav className="flex-1 mt-6 px-2 space-y-2 overflow-y-auto">
          {navigationButtons.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={index}
                to={item.path}
                className={`
                  flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200
                  ${
                    isActive
                      ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg"
                      : "text-slate-300 hover:bg-slate-700 hover:text-white"
                  }
                `}
              >
                <div className="w-9 h-9 flex items-center justify-center">
                  {item.icon}
                </div>

                {!collapsed && (
                  <span className="font-medium text-sm">
                    {item.text}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* ================= MOBILE BOTTOM BAR ================= */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-700 flex justify-around py-2">

        {navigationButtons.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={index}
              to={item.path}
              className={`flex flex-col items-center text-xs ${
                isActive ? "text-teal-400" : "text-slate-400"
              }`}
            >
              {item.icon}
              <span className="text-[10px] mt-1">
                {item.text}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}

export default Sidebar;