import  {apiConnector}  from "./apiConnector";
import  {dashboardendpoint}  from "./api";
const { ADMIN_DASHBOARD } = dashboardendpoint;
export const fetchAdminDashboard = () => {
  return apiConnector("GET", ADMIN_DASHBOARD);
};
