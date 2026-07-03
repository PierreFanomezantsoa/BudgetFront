import React from "react";
import { Trash2, Plus, FilePenLine, Calendar, Wallet } from "lucide-react";

function DonneeDepense() {
  const data = [
    {
      titre: "Courses alimentaires",
      montant: 120000,
      categorie: "Alimentation",
      date: "2026-07-01",
    },
    {
      titre: "Transport taxi",
      montant: 15000,
      categorie: "Transport",
      date: "2026-07-02",
    },
    {
      titre: "Électricité JIRAMA",
      montant: 45000,
      categorie: "Facture",
      date: "2026-07-03",
    },
    {
      titre: "Internet",
      montant: 60000,
      categorie: "Communication",
      date: "2026-07-04",
    },
  ];

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Liste des dépenses
          </h1>
          <p className="text-gray-500 text-sm">
            Gestion des dépenses du budget familial
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 px-4 sm:px-5 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl shadow hover:scale-105 transition w-full sm:w-auto">
          <Plus size={18} />
          Ajouter
        </button>

      </div>

      {/* TABLE WRAPPER (IMPORTANT MOBILE) */}
      <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">

        <table className="w-full min-w-[700px] text-sm">

          {/* HEADER */}
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left p-4 whitespace-nowrap">Dépense</th>
              <th className="text-left p-4 whitespace-nowrap">Catégorie</th>
              <th className="text-left p-4 whitespace-nowrap">Montant</th>
              <th className="text-left p-4 whitespace-nowrap">Date</th>
              <th className="text-center p-4 whitespace-nowrap">Actions</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {data.map((depense, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition"
              >

                {/* TITRE */}
                <td className="p-4 font-medium text-gray-800 whitespace-nowrap">
                  {depense.titre}
                </td>

                {/* CATÉGORIE */}
                <td className="p-4 text-gray-600 whitespace-nowrap">
                  {depense.categorie}
                </td>

                {/* MONTANT */}
                <td className="p-4 text-teal-600 font-semibold whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <Wallet size={16} />
                    {depense.montant.toLocaleString()} Ar
                  </div>
                </td>

                {/* DATE */}
                <td className="p-4 text-gray-600 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {depense.date}
                  </div>
                </td>

                {/* ACTIONS */}
                <td className="p-4">
                  <div className="flex justify-center gap-2">

                    <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                      <FilePenLine size={16} />
                    </button>

                    <button className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                      <Trash2 size={16} />
                    </button>

                  </div>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default DonneeDepense;