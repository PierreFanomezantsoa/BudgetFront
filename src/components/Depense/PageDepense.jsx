import { useState } from "react";
import {
  BanknoteArrowDown,
  BanknoteX,
  CircleDollarSign,
  Bitcoin,
  Ellipsis,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { motion } from "framer-motion";

import StatistAnneul from "./StatistAnneul";
import Modal from "../Modal";
import DetailDepense from "../Depense/detailDepense";
import DetailRevenue from "../Revenue/DetailRevenue";

const data = [
  { name: "Lun", depense: 4000, revenue: 2400 },
  { name: "Mar", depense: 3000, revenue: 1398 },
  { name: "Mer", depense: 2000, revenue: 9800 },
  { name: "Jeu", depense: 2780, revenue: 3908 },
  { name: "Ven", depense: 1890, revenue: 4800 },
  { name: "Sam", depense: 2390, revenue: 3800 },
];

function PageDepense() {
  const [open, setOpen] = useState(false);

  const cards = [
    {
      title: "Dépenses",
      value: "$1500",
      icon: <BanknoteX size={20} />,
      border: "border-red-500",
    },
    {
      title: "Revenus",
      value: "$1800",
      icon: <CircleDollarSign size={20} />,
      border: "border-blue-500",
    },
    {
      title: "Total dépenses",
      value: "$2500",
      icon: <BanknoteArrowDown size={20} />,
      border: "border-orange-500",
    },
    {
      title: "Total revenus",
      value: "$2900",
      icon: <Bitcoin size={20} />,
      border: "border-green-500",
    },
  ];

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Budget mensuel
          </h1>
          <p className="text-gray-500 text-sm">
            Suivi des dépenses et revenus familiaux
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="w-full md:w-auto px-5 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl shadow hover:scale-105 transition"
        >
          Détails budgets
        </button>

      </div>

      {/* CARDS */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.12 },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
      >
        {cards.map((c, i) => (
          <motion.div
            key={i}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            className={`bg-white p-4 sm:p-5 rounded-2xl shadow-md border-l-4 ${c.border} flex justify-between items-center hover:shadow-xl transition`}
          >
            <div>
              <h2 className="text-xs sm:text-sm text-gray-400 font-semibold">
                {c.title}
              </h2>
              <h1 className="text-lg sm:text-xl font-bold text-gray-800 mt-1">
                {c.value}
              </h1>
            </div>

            <div className="text-gray-500">{c.icon}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {/* BAR CHART */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-md overflow-x-auto">

          <div className="flex justify-between mb-4">
            <h2 className="text-gray-600 font-semibold text-sm sm:text-base">
              Statistiques mensuelles
            </h2>
            <Ellipsis />
          </div>

          <div className="w-full h-[260px] sm:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="depense" fill="#ef4444" />
                <Bar dataKey="revenue" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>

        {/* ANNUAL */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-md">

          <div className="flex justify-between mb-4">
            <h2 className="text-gray-600 font-semibold text-sm sm:text-base">
              Statistiques annuelles
            </h2>
            <Ellipsis />
          </div>

          <StatistAnneul />

        </div>

      </div>

      {/* MODAL */}
      <Modal open={open} onClose={() => setOpen(false)}>

        <div className="w-full max-w-4xl max-h-[80vh] overflow-y-auto p-4 space-y-6">

          <h1 className="text-lg sm:text-xl font-bold text-center underline underline-offset-8">
            Détail budget mensuel
          </h1>

          <DetailDepense />
          <DetailRevenue />

        </div>

      </Modal>

    </div>
  );
}

export default PageDepense;