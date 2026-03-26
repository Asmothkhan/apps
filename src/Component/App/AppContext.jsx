/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  // ১. State Initialization (Local Storage theke data load shoho)
  const [installedApps, setInstalledApps] = useState(() => {
    const saved = localStorage.getItem("installedApps");
    return saved ? JSON.parse(saved) : [];
  });

  // ২. Local Storage-e save korar logic
  useEffect(() => {
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
  }, [installedApps]);

  // ৩. App Install logic
  const installApp = (app) => {
    const exists = installedApps.find((a) => a.id == app.id);
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