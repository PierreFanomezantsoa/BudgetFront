import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { mois: "Jan", depense: 590, revenu: 800, solde: 1400 },
  { mois: "Fév", depense: 868, revenu: 967, solde: 1506 },
  { mois: "Mar", depense: 1397, revenu: 1098, solde: 989 },
  { mois: "Avr", depense: 1480, revenu: 1200, solde: 1228 },
  { mois: "Mai", depense: 1520, revenu: 1108, solde: 1100 },
  { mois: "Juin", depense: 1400, revenu: 680, solde: 1700 },
  { mois: "Juil", depense: 1200, revenu: 780, solde: 1700 },
  { mois: "Août", depense: 1200, revenu: 800, solde: 1700 },
];

function StatistAnnuel() {
  return (
    <div className="w-full bg-white rounded-xl p-2 sm:p-4">

      {/* RESPONSIVE HEIGHT */}
      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px]">

        <ResponsiveContainer width="100%" height="100%">

          <ComposedChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 10,
            }}
          >

            <CartesianGrid strokeDasharray="3 3" />

            {/* X AXIS RESPONSIVE */}
            <XAxis
              dataKey="mois"
              tick={{ fontSize: 10 }}
              interval={0}
              angle={-30}
              textAnchor="end"
            />

            <YAxis tick={{ fontSize: 10 }} />

            <Tooltip />

            {/* BAR CHARTS */}
            <Bar
              dataKey="depense"
              barSize={12}
              fill="#ef4444"
            />

            <Bar
              dataKey="revenu"
              barSize={12}
              fill="#10b981"
            />

            {/* LINE */}
            <Line
              type="monotone"
              dataKey="solde"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
            />

            {/* AREA (light background effect) */}
            <Area
              type="monotone"
              dataKey="solde"
              fill="#bfdbfe"
              stroke="none"
            />

          </ComposedChart>

        </ResponsiveContainer>

      </div>
    </div>
  );
}

export default StatistAnnuel;