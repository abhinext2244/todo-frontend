import { createContext } from "react";
import { useEffect, useState } from "react";
// import AdminDashboardContext from "./AdminDashboardContext";
import { fetchAdminDashboard } from "../../../services/adminApi.js";
import { useLoading } from "../../useLoading";
const AdminDashboardContext = createContext(null);
export const AdminDashboardProvider = ({ children }) => {
  const { loading, setLoading } = useLoading();
  const [dashboard, setDashboard] = useState(null);
  const [error, setError] = useState(null);

  const loadAdminDashboard = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetchAdminDashboard();
      setDashboard(res.data.data);
    } catch (err) {
      console.log(err);
      setError("Failed to load admin dashboard");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAdminDashboard();
    console.log("dashboard", dashboard);
  }, []);
  
  return (
    <AdminDashboardContext.Provider
      value={{
        dashboard,
        loading,
        error,
        refreshDashboard: loadAdminDashboard,
      }}
    >
      {children}
    </AdminDashboardContext.Provider>
  );
};




export default AdminDashboardContext;
