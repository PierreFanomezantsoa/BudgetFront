import React, { useState } from "react";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  PiggyBank,
  Bot,
  Send,
} from "lucide-react";

function Budget() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    { role: "ai", text: "Bonjour 👋 Je suis ton assistant budget. Pose-moi une question financière." },
  ]);

  const budgetData = [
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
      title: "Solde restant",
      value: "1 400 Ar",
      icon: <Wallet />,
      color: "border-blue-500",
    },
  ];

  const sendMessage = () => {
    if (!message.trim()) return;

    const newChat = [
      ...chat,
      { role: "user", text: message },
      {
        role: "ai",
        text:
          "Analyse IA : Tu dépenses principalement sur les besoins essentiels. Ton solde reste positif mais surveille les dépenses récurrentes.",
      },
    ];

    setChat(newChat);
    setMessage("");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Budget familial
        </h1>
        <p className="text-gray-500 text-sm">
          Analyse intelligente du budget avec IA
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">

        {budgetData.map((item, index) => (
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

            <div className="text-gray-500">{item.icon}</div>
          </div>
        ))}

      </div>

      {/* IA ANALYSIS */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-6">

        <div className="flex items-center gap-2 mb-3 text-teal-600">
          <Bot size={20} />
          <h2 className="text-lg font-semibold">
            Analyse IA du budget
          </h2>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed">
          🔎 Ton budget est stable. Les revenus couvrent les dépenses, mais il est conseillé de réduire les dépenses non essentielles pour améliorer l’épargne familiale.
        </p>

      </div>

      {/* CHAT IA */}
      <div className="bg-white p-6 rounded-2xl shadow-md">

        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Discussion avec l’IA financière
        </h2>

        {/* CHAT BOX */}
        <div className="h-64 overflow-y-auto border rounded-xl p-3 mb-4 bg-gray-50 space-y-2">

          {chat.map((c, i) => (
            <div
              key={i}
              className={`p-2 rounded-lg text-sm w-fit max-w-[80%] ${
                c.role === "user"
                  ? "ml-auto bg-teal-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {c.text}
            </div>
          ))}

        </div>

        {/* INPUT */}
        <div className="flex gap-2">

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Pose une question sur ton budget..."
            className="flex-1 border rounded-xl p-3 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
            rows={2}
          />

          <button
            onClick={sendMessage}
            className="px-4 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition flex items-center gap-2"
          >
            <Send size={18} />
          </button>

        </div>

      </div>

    </div>
  );
}

export default Budget;