import React from "react";
import { HelpCircle, MessageCircle, BookOpen, Mail } from "lucide-react";

function Help() {
  const sections = [
    {
      title: "Ajouter une dépense",
      desc: "Allez dans Dépenses → bouton Ajouter pour enregistrer une nouvelle dépense.",
      icon: <MessageCircle size={20} />,
      color: "bg-teal-500",
    },
    {
      title: "Gestion du budget",
      desc: "Le budget est calculé automatiquement selon revenus et dépenses.",
      icon: <BookOpen size={20} />,
      color: "bg-blue-500",
    },
    {
      title: "Problème de connexion",
      desc: "Vérifiez vos identifiants ou réinitialisez votre mot de passe.",
      icon: <HelpCircle size={20} />,
      color: "bg-orange-500",
    },
    {
      title: "Support technique",
      desc: "Contactez notre équipe pour toute assistance ou bug technique.",
      icon: <Mail size={20} />,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Centre d’aide
        </h1>
        <p className="text-gray-500 text-sm">
          Assistance pour l’application budget familial
        </p>
      </div>

      {/* HELP CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {sections.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 sm:p-5 rounded-2xl shadow-md hover:shadow-lg transition"
          >

            {/* HEADER CARD */}
            <div className="flex items-center gap-3 mb-3">

              <div
                className={`w-9 h-9 rounded-lg ${item.color} flex items-center justify-center text-white`}
              >
                {item.icon}
              </div>

              <h2 className="font-semibold text-gray-800 text-sm sm:text-base">
                {item.title}
              </h2>

            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

      {/* CONTACT SECTION */}
      <div className="mt-8 bg-white p-5 sm:p-6 rounded-2xl shadow-md text-center">

        <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">
          Besoin d’aide supplémentaire ?
        </h2>

        <p className="text-gray-500 text-sm mb-4">
          Notre équipe est disponible pour vous accompagner.
        </p>

        <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl hover:scale-105 transition">
          Contacter le support
        </button>

      </div>

    </div>
  );
}

export default Help;