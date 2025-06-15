// components/dashboard/DailyProfitsChart.tsx
'use client'; // Recharts precisa de client component

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Seg', total: 1000 },
  { name: 'Ter', total: 1200 },
  { name: 'Qua', total: 900 },
  { name: 'Qui', total: 1500 },
  { name: 'Sex', total: 1800 },
  { name: 'Sáb', total: 1100 },
  { name: 'Dom', total: 1300 },
];

export function DailyProfitsChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `R$${value}`}
        />
        <Tooltip
          cursor={{ fill: 'transparent' }}
          formatter={(value: number) => `R$${value.toFixed(2)}`}
          labelFormatter={(label: string) => `Dia: ${label}`}
        />
        <Legend />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}