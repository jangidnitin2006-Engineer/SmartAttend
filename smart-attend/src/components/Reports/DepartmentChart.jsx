import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = [
  "#2563eb",
  "#22c55e",
  "#eab308",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
];

export default function DepartmentChart({ employees }) {
  const departments = {};

  employees.forEach((emp) => {
    departments[emp.department] =
      (departments[emp.department] || 0) + 1;
  });

  const data = Object.keys(departments).map((dept) => ({
    name: dept,
    value: departments[dept],
  }));

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl font-bold mb-5">
        Department Distribution
      </h2>

      <PieChart width={450} height={320}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={110}
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}