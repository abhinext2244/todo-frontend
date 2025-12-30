import AdminDashboardContext from "./AdminDashboardContext";
import { useContext } from "react";

export const useAdminDashboard = () => {
    const ctx = useContext(AdminDashboardContext);
    if (!ctx) throw new Error("useAdminDashboard must be used within AdminDashboardProvider");
    return ctx;
};