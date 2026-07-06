export default function NotificationSettings({
  settings,
  setSettings,
}) {
  const handleToggle = (field) => {
    setSettings({
      ...settings,
      [field]: !settings[field],
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-xl font-bold mb-5">
        Notification & Preferences
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between items-center">
          <span>Email Notifications</span>

          <input
            type="checkbox"
            checked={settings.emailNotifications}
            onChange={() => handleToggle("emailNotifications")}
            className="w-5 h-5"
          />
        </div>

        <div className="flex justify-between items-center">
          <span>SMS Notifications</span>

          <input
            type="checkbox"
            checked={settings.smsNotifications}
            onChange={() => handleToggle("smsNotifications")}
            className="w-5 h-5"
          />
        </div>

        <div className="flex justify-between items-center">
          <span>Browser Notifications</span>

          <input
            type="checkbox"
            checked={settings.browserNotifications}
            onChange={() => handleToggle("browserNotifications")}
            className="w-5 h-5"
          />
        </div>

        <div className="flex justify-between items-center">
          <span>Dark Mode</span>

          <input
            type="checkbox"
            checked={settings.darkMode}
            onChange={() => handleToggle("darkMode")}
            className="w-5 h-5"
          />
        </div>

        <div>

          <label className="block mb-2 font-medium">
            Language
          </label>

          <select
            value={settings.language}
            onChange={(e) =>
              setSettings({
                ...settings,
                language: e.target.value,
              })
            }
            className="w-full border rounded-lg p-3"
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Gujarati</option>
          </select>

        </div>

      </div>

    </div>
  );
}