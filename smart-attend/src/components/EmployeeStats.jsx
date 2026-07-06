export default function EmployeeStats() {
  const stats = [
    { title: "Total Employees", value: 250, color: "bg-blue-600" },
    { title: "Present Today", value: 238, color: "bg-green-600" },
    { title: "Absent", value: 12, color: "bg-red-600" },
    { title: "Departments", value: 8, color: "bg-purple-600" },
  ];

  return (
    <div className="grid grid-cols-4 gap-5 mb-6">
      {stats.map((item) => (
        <div
          key={item.title}
          className={`${item.color} text-white rounded-2xl p-6 shadow-lg`}
        >
          <p>{item.title}</p>
          <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
        </div>
      ))}
    </div>
  );
}