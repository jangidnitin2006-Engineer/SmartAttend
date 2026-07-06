import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function ExportButtons({
  employees,
  attendance,
  leaves,
}) {
  const exportPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("SmartAttend Report", 14, 20);

    autoTable(doc, {
      startY: 30,
      head: [["Employee ID", "Name", "Department", "Status"]],
      body: employees.map((emp) => [
        emp.employeeId,
        emp.fullName,
        emp.department,
        emp.status,
      ]),
    });

    doc.save("SmartAttend_Report.pdf");
  };

  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      employees.map((emp) => ({
        EmployeeID: emp.employeeId,
        Name: emp.fullName,
        Department: emp.department,
        Designation: emp.designation,
        Status: emp.status,
      }))
    );

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Employees"
    );

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const data = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });

    saveAs(data, "SmartAttend_Report.xlsx");
  };

  return (
    <div className="flex gap-4 mb-8">

      <button
        onClick={exportPDF}
        className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg"
      >
        Export PDF
      </button>

      <button
        onClick={exportExcel}
        className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg"
      >
        Export Excel
      </button>

    </div>
  );
}