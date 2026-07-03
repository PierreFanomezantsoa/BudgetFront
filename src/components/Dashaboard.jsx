import React from "react";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  PiggyBank,
  Users,
} from "lucide-react";

function Dashboard() {
  const stats = [
    {
      title: "Budget total",
      value: "2 900 Ar",
      icon: <PiggyBank />,
      color: "border-teal-500",
    },
    {
      title: "Revenus",
      value: "3 500 Ar",
      icon: <TrendingUp />,
      color: "border-green-500",
    },
    {
      title: "Dépenses",
      value: "2 100 Ar",
      icon: <TrendingDown />,
      color: "border-red-500",
    },
    {
      title: "Membres famille",
      value: "4",
      icon: <Users />,
      color: "border-blue-500",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Tableau de bord
        </h1>
        <p className="text-gray-500 text-sm">
          Vue globale du budget familial
        </p>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

        {stats.map((item, index) => (
          <div
            key={index}
            className={`bg-white p-5 rounded-2xl shadow-md border-l-4 ${item.color} flex justify-between items-center hover:shadow-xl transition`}
          >
            <div>
              <h2 className="text-sm text-gray-400 font-semibold">
                {item.title}
              </h2>
              <h1 className="text-xl font-bold text-gray-800 mt-1">
                {item.value}
              </h1>
            </div>

            <div className="text-gray-500">
              {item.icon}
            </div>
          </div>
        ))}

      </div>

      {/* ANALYTICS SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

        {/* LEFT */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            Résumé financier
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed">
            Ce tableau de bord permet de suivre les revenus, dépenses et le budget restant de la famille en temps réel.
            Il aide à prendre des décisions financières plus intelligentes et à éviter les dépassements.
          </p>
        </div>

        {/* RIGHT */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            Actions rapides
          </h2>

          <div className="space-y-3">

            <button className="w-full py-3 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition">
              Ajouter une dépense
            </button>

            <button className="w-full py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition">
              Ajouter un revenu
            </button>

            <button className="w-full py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">
              Voir statistiques
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;