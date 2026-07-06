export default function CompanySettings({
  company,
  setCompany,
}) {
  const handleChange = (e) => {
    setCompany({
      ...company,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-xl font-bold mb-5">
        Company Settings
      </h2>

      <div className="space-y-4">

        <div>
          <label className="block mb-1 font-medium">
            Company Name
          </label>

          <input
            type="text"
            name="companyName"
            value={company.companyName}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Company Email
          </label>

          <input
            type="email"
            name="companyEmail"
            value={company.companyEmail}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Company Phone
          </label>

          <input
            type="text"
            name="companyPhone"
            value={company.companyPhone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Company Address
          </label>

          <textarea
            rows="3"
            name="companyAddress"
            value={company.companyAddress}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">

          <div>
            <label className="block mb-1 font-medium">
              Office Start
            </label>

            <input
              type="time"
              name="officeStart"
              value={company.officeStart}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Office End
            </label>

            <input
              type="time"
              name="officeEnd"
              value={company.officeEnd}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />
          </div>

        </div>

      </div>

    </div>
  );
}