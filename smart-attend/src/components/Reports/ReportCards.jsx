export default function ReportCards({
  employees,
  present,
  absent,
  leaves,
}) {
  const cards = [
    {
      title: "Total Employees",
      value: employees,
      color: "bg-blue-600",
    },
    {
      title: "Present Today",
      value: present,
      color: "bg-green-600",
    },
    {
      title: "Absent Today",
      value: absent,
      color: "bg-red-600",
    },
    {
      title: "Leave Requests",
      value: leaves,
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.color} text-white rounded-xl p-6 shadow-lg`}
        >
          <h3 className="text-lg">{card.title}</h3>

          <h1 className="text-4xl font-bold mt-3">
            {card.value}
          </h1>
        </div>
      ))}
    </div>
  );
}