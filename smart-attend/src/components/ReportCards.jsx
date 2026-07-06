const cards = [
  {
    title: "Employees",
    value: 250,
    color: "bg-blue-600",
  },
  {
    title: "Present",
    value: 238,
    color: "bg-green-600",
  },
  {
    title: "Absent",
    value: 12,
    color: "bg-red-600",
  },
  {
    title: "Late",
    value: 18,
    color: "bg-yellow-500",
  },
];

export default function ReportCards() {
  return (
    <div className="grid grid-cols-4 gap-5">

      {cards.map((card) => (

        <div
          key={card.title}
          className={`${card.color} text-white rounded-xl p-6`}
        >

          <h3>{card.title}</h3>

          <h1 className="text-4xl font-bold mt-3">
            {card.value}
          </h1>

        </div>

      ))}

    </div>
  );
}