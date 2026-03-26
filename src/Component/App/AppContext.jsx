/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  

  const [installedApps, setInstalledApps] = useState(() => {
  try {
    const saved = localStorage.getItem("installedApps");
    // Jodi data thake tobe parse korbe, na thakle empty array dibe
    return saved ? JSON.parse(saved) : []; 
  } catch (error) {
    return []; // Kono error holeo jate array thake
  }
});

  // ২. Local Storage-e save korar logic
  useEffect(() => {
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
  }, [installedApps]);

  // ৩. App Install logic
  const installApp = (app) => {
    const exists = installedApps.find((a) => a.id === app.id);
    if (!exists) {
      setInstalledApps([...installedApps, app]);
      toast.success(`${app.title} Installed Successfully ✅`);
    } else {
      toast.info("This app is already installed!");
    }
  };

  // ৪. App Uninstall logic
  const uninstallApp = (id) => {
    setInstalledApps(installedApps.filter((a) => a.id !== id));
 
  };

  // ৫. Return statement (Ati oboshshoi function-er curly braces-er bhetore thakte hobe)
  return (
    <AppContext.Provider value={{ installedApps, installApp, uninstallApp }}>
      {children}
    </AppContext.Provider>
  );
}; // <--- Function ekhane shesh

export default AppProvider;