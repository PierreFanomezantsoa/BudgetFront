import React, { useState } from "react";
import {
  User,
  Wallet,
  Bell,
  Globe,
  Shield,
  Moon,
  Save,
} from "lucide-react";

function Parametre() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    depense: true,
    budget: true,
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-teal-600">
          Paramètres
        </h1>
        <p className="text-gray-500">
          Configurez votre application de gestion du budget familial.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* PROFIL */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="flex items-center text-lg font-semibold text-gray-700 mb-5">
            <User className="mr-2 text-teal-500" />
            Informations personnelles
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Nom complet"
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-teal-500 outline-none"
            />

            <input
              type="email"
              placeholder="Adresse e-mail"
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-teal-500 outline-none"
            />
          </div>
        </div>

        {/* DEVISE */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="flex items-center text-lg font-semibold text-gray-700 mb-5">
            <Wallet className="mr-2 text-green-500" />
            Devise
          </h2>

          <select className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none">
            <option>Ariary (Ar)</option>
            <option>Euro (€)</option>
            <option>Dollar ($)</option>
          </select>
        </div>

        {/* NOTIFICATIONS */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="flex items-center text-lg font-semibold text-gray-700 mb-5">
            <Bell className="mr-2 text-orange-500" />
            Notifications
          </h2>

          <div className="space-y-4">

            <label className="flex justify-between items-center">
              <span>Alertes de dépenses</span>
              <input
                type="checkbox"
                checked={notifications.depense}
                onChange={() =>
                  setNotifications((prev) => ({
                    ...prev,
                    depense: !prev.depense,
                  }))
                }
              />
            </label>

            <label className="flex justify-between items-center">
              <span>Budget dépassé</span>
              <input
                type="checkbox"
                checked={notifications.budget}
                onChange={() =>
                  setNotifications((prev) => ({
                    ...prev,
                    budget: !prev.budget,
                  }))
                }
              />
            </label>

          </div>
        </div>

        {/* PREF */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="flex items-center text-lg font-semibold text-gray-700 mb-5">
            <Globe className="mr-2 text-blue-500" />
            Préférences
          </h2>

          <div className="space-y-4">

            <select className="w-full border rounded-xl p-3 outline-none">
              <option>Français</option>
              <option>Malagasy</option>
              <option>English</option>
            </select>

            <div className="flex justify-between items-center">
              <span>Mode sombre</span>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition ${
                  darkMode ? "bg-gray-800 text-white" : "bg-gray-200"
                }`}
              >
                <Moon size={18} />
              </button>
            </div>

          </div>
        </div>

        {/* SECURITE */}
        <div className="bg-white rounded-2xl shadow-md p-6 lg:col-span-2">
          <h2 className="flex items-center text-lg font-semibold text-gray-700 mb-5">
            <Shield className="mr-2 text-red-500" />
            Sécurité
          </h2>

          <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl transition">
            Modifier le mot de passe
          </button>
        </div>

      </div>

      {/* SAVE BUTTON */}
      <div className="mt-8 flex justify-end">
        <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl shadow-lg transition">
          <Save size={18} />
          Enregistrer les modifications
        </button>
      </div>

    </div>
  );
}

export default Parametre;