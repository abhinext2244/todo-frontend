import {apiConnector} from "./apiConnector";
import { dashboardendpoint } from "./api";

const { DASHBOARD } = dashboardendpoint;
export const fetchDashboardData = () => {
    return apiConnector("GET", DASHBOARD);
};