import React from "react";
import {
  CalendarDays,
  Calendar,
  CalendarRange,
  BarChart3,
} from "lucide-react";

function DetailDepense() {
  const sections = [
    {
      title: "Dépenses quotidiennes",
      desc: "Suivi détaillé de toutes les dépenses par jour avec historique complet.",
      icon: <CalendarDays size={20} />,
      color: "bg-teal-500",
    },
    {
      title: "Dépenses hebdomadaires",
      desc: "Vue globale des dépenses regroupées par semaine avec comparaison.",
      icon: <Calendar size={20} />,
      color: "bg-blue-500",
    },
    {
      title: "Dépenses mensuelles",
      desc: "Analyse mensuelle avec statistiques et répartition des coûts.",
      icon: <CalendarRange size={20} />,
      color: "bg-purple-500",
    },
    {
      title: "Dépenses annuelles",
      desc: "Vision globale annuelle avec tendances et évolution des dépenses.",
      icon: <BarChart3 size={20} />,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="mb-6 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold text-teal-600">
          Dépenses
        </h1>
        <p className="text-gray-500 text-sm">
          Analyse et suivi des dépenses par période
        </p>
      </div>

      {/* GRID RESPONSIVE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">

        {sections.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-4 sm:p-6 hover:shadow-xl transition"
          >

            {/* ICON + TITLE */}
            <div className="flex items-start sm:items-center gap-3 mb-3 sm:mb-4">

              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${item.color} text-white flex items-center justify-center flex-shrink-0`}
              >
                {item.icon}
              </div>

              <h2 className="text-base sm:text-lg font-semibold text-gray-800 leading-snug">
                {item.title}
              </h2>

            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              {item.desc}
            </p>

            {/* ACTION */}
            <div className="mt-3 sm:mt-4">
              <button className="text-xs sm:text-sm text-teal-600 hover:text-teal-800 font-medium">
                Voir détails →
              </button>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default DetailDepense;