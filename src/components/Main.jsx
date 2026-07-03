import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() && password.trim()) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-600 via-cyan-500 to-slate-900 p-4 sm:p-6">

      {/* CARD */}
      <div className="w-full max-w-sm sm:max-w-md bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8">

        {/* HEADER */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-800">
            Budget Familial
          </h1>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Connectez-vous à votre compte
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

          {/* EMAIL */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Adresse email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemple@gmail.com"
              className="w-full mt-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none transition"
              required
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full mt-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none transition"
              required
            />
          </div>

          {/* OPTIONS */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm">

            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-teal-500" />
              Se souvenir de moi
            </label>

            <Link
              to="/forgot-password"
              className="text-teal-600 hover:text-teal-800 transition"
            >
              Mot de passe oublié ?
            </Link>

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold shadow-lg hover:scale-[1.02] active:scale-[0.98] transition"
          >
            Se connecter
          </button>

        </form>

        {/* SEPARATOR */}
        <div className="my-5 sm:my-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-xs sm:text-sm text-gray-400">ou</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* REGISTER */}
        <Link
          to="/register"
          className="block text-center w-full py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition font-medium text-sm sm:text-base"
        >
          S'inscrire
        </Link>

      </div>
    </div>
  );
}