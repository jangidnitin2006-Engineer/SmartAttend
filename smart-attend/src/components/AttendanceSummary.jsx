export default function AttendanceSummary() {

  const cards = [
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
      color: "bg-orange-500",
    },
    {
      title: "On Leave",
      value: 5,
      color: "bg-blue-600",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-5">

      {cards.map((card) => (

        <div
          key={card.title}
          className={`${card.color} text-white rounded-2xl p-6`}
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