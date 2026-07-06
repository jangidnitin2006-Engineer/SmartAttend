export default function StatCard({
  title,
  value,
  color,
}) {
  return (
    <div
      className={`rounded-2xl p-6 text-white shadow-lg ${color}`}
    >
      <h3 className="text-lg">{title}</h3>

      <h1 className="text-4xl font-bold mt-3">
        {value}
      </h1>
    </div>
  );
}