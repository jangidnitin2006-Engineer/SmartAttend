import { useEffect, useState } from "react";

import MainLayout from "../Layouts/MainLayout";
import ProfileCard from "../components/ProfileCard";
import CompanySettings from "../components/CompanySettings";
import SecuritySettings from "../components/SecuritySettings";
import NotificationSettings from "../components/NotificationSettings";
import SaveButton from "../components/SaveButton";

import API from "../api/settingsApi";

export default function Settings() {

  const [company, setCompany] = useState({
    companyName: "",
    companyEmail: "",
    companyPhone: "",
    companyAddress: "",
    officeStart: "09:00",
    officeEnd: "18:00",
  });

  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    browserNotifications: true,
    darkMode: false,
    language: "English",
  });

  // Load Settings
  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await API.get("/settings");

      setCompany({
        companyName: res.data.companyName,
        companyEmail: res.data.companyEmail,
        companyPhone: res.data.companyPhone,
        companyAddress: res.data.companyAddress,
        officeStart: res.data.officeStart,
        officeEnd: res.data.officeEnd,
      });

      setSettings({
        emailNotifications: res.data.emailNotifications,
        smsNotifications: res.data.smsNotifications,
        browserNotifications: res.data.browserNotifications,
        darkMode: res.data.darkMode,
        language: res.data.language,
      });

    } catch (error) {
      console.log(error);
    }
  };

  const saveAllSettings = async () => {

    try {

      await API.put("/settings", {
        ...company,
        ...settings,
      });

      alert("Settings Saved Successfully!");

    } catch (error) {
      console.log(error);

      alert("Failed to Save Settings");
    }
  };

  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-6">
        Settings
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <ProfileCard />

        <CompanySettings
          company={company}
          setCompany={setCompany}
        />

      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">

        <SecuritySettings />

        <NotificationSettings
          settings={settings}
          setSettings={setSettings}
        />

      </div>

      <div className="mt-8">

        <SaveButton
          onSave={saveAllSettings}
        />

      </div>

    </MainLayout>
  );
}