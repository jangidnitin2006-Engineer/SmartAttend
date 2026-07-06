export default function DashboardCard({
  title,
  value,
  color
}) {
  return (
    <div
      className={`rounded-2xl p-6 shadow-lg text-white ${color}`}
    >
      <h2 className="text-lg">
        {title}
      </h2>

      <h1 className="text-4xl font-bold mt-3">
        {value}
      </h1>
    </div>
  );
}