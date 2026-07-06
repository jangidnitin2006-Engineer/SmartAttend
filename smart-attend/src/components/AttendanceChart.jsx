export default function AttendanceChart() {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-bold mb-5">
        Monthly Attendance
      </h2>

      <div className="h-72 flex items-end justify-around">

        {[65,80,45,95,75,60,88].map((value,index)=>(

          <div
            key={index}
            className="bg-blue-600 w-10 rounded-t-xl"
            style={{height:`${value}%`}}
          />

        ))}

      </div>

    </div>
  );
}