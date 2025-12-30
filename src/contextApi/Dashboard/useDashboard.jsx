import DashboardContext from "./userDashboardContext";  
import { useContext } from "react";

export const useDashboard = () => {
    const ctx = useContext(DashboardContext);
    if (!ctx) throw new Error("useDashboard must be used within DashboardProvider");
    return ctx;
};