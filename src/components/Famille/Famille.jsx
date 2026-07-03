import React from "react";
import {
  Plus,
  UserRound,
  UserCheck,
  UserRoundSearch,
  Mail,
  Phone,
} from "lucide-react";

function Famille() {
  const members = [
    {
      icon: <UserRound size={18} />,
      name: "Mahery",
      role: "Parent",
      phone: "02444444",
      email: "mahery@gmail.com",
      status: "Actif",
      color: "bg-teal-500",
    },
    {
      icon: <UserCheck size={18} />,
      name: "Faniriana",
      role: "Enfant",
      phone: "02544444",
      email: "faniriana@gmail.com",
      status: "Actif",
      color: "bg-blue-500",
    },
    {
      icon: <UserRoundSearch size={18} />,
      name: "Fitahiana",
      role: "Membre",
      phone: "0770777",
      email: "fitiavana@gmail.com",
      status: "Inactif",
      color: "bg-gray-500",
    },
  ];

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">

      {/* HEADER RESPONSIVE */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Membres de la famille
          </h1>
          <p className="text-gray-500 text-sm">
            Gestion des membres du budget familial
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 px-4 sm:px-5 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl shadow hover:scale-105 transition w-full sm:w-auto">
          <Plus size={18} />
          Ajouter
        </button>

      </div>

      {/* TABLE WRAPPER MOBILE SAFE */}
      <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">

        <table className="w-full min-w-[750px] text-sm">

          {/* HEADER */}
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="p-4 text-left whitespace-nowrap">Membre</th>
              <th className="p-4 text-left whitespace-nowrap">Rôle</th>
              <th className="p-4 text-left whitespace-nowrap">Téléphone</th>
              <th className="p-4 text-left whitespace-nowrap">Email</th>
              <th className="p-4 text-center whitespace-nowrap">Statut</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {members.map((membre, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition"
              >

                {/* MEMBRE */}
                <td className="p-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full ${membre.color} flex items-center justify-center text-white`}
                    >
                      {membre.icon}
                    </div>

                    <span className="font-medium text-gray-700">
                      {membre.name}
                    </span>
                  </div>
                </td>

                {/* ROLE */}
                <td className="p-4 text-gray-600 whitespace-nowrap">
                  {membre.role}
                </td>

                {/* PHONE */}
                <td className="p-4 text-gray-600 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-gray-400" />
                    {membre.phone}
                  </div>
                </td>

                {/* EMAIL */}
                <td className="p-4 text-gray-600 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-gray-400" />
                    {membre.email}
                  </div>
                </td>

                {/* STATUS */}
                <td className="p-4 text-center whitespace-nowrap">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      membre.status === "Actif"
                        ? "bg-green-500"
                        : "bg-gray-400"
                    }`}
                  >
                    {membre.status}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default Famille;