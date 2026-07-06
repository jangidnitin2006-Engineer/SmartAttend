export default function LeaveSummary() {
  const cards = [
    { title: "Pending", value: 4, color: "bg-yellow-500" },
    { title: "Approved", value: 18, color: "bg-green-600" },
    { title: "Rejected", value: 2, color: "bg-red-600" },
  ];

  return (
    <div className="grid grid-cols-3 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`${card.color} text-white rounded-xl p-6`}
        >
          <h2>{card.title}</h2>
          <h1 className="text-4xl font-bold mt-3">{card.value}</h1>
        </div>
      ))}
    </div>
  );
}