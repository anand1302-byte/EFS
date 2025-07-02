// components/SummaryCard.tsx
import { ReactNode } from "react";

/* 
  Props:
    - title: string
    - value: string | number
    - icon: ReactNode
    - color?: string
*/

export default function SummaryCard({ title, value, icon, color = "from-blue-100 to-blue-50" }) {
  return (
    <div className={`bg-gradient-to-br ${color} p-5 rounded-xl shadow-md hover:shadow-lg transition`}>
      <div className="flex items-center gap-4">
        <div className="bg-white p-2 rounded-full shadow-inner">
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
      </div>
    </div>
  );
}
