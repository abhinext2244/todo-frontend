import { createContext, useEffect, useState } from "react";
import {fetchDashboardData} from "../../services/dashboardApi.js"
import {useLoading} from "../../contextApi/useLoading";
const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const { loading, setLoading } = useLoading();
  const [dashboard, setDashboard] = useState(null);
  
  const [error, setError] = useState(null);

  const loadDashboard = async () => {
    try {
      setLoading(true);
      const data = await fetchDashboardData();
      setDashboard(data.data.data);
    } catch (err) {
        console.log(err);
      setError("Failed to load dashboard");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        dashboard,
        loading,
        error,
        refreshDashboard: loadDashboard
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};


export default DashboardContext;