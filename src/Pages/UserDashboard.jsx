import  {useDashboard}  from "../contextApi/Dashboard/useDashboard.jsx";
import StatCard from "../components/Dashboard/StatCard.jsx";
import TodayTasks from "../components/Dashboard/TodayTasks.jsx";

const UserDashboard = () => {
  const { dashboard, loading, error } = useDashboard();

  console.log("dashboard", dashboard);

  if (loading) return <p>Loading dashboard...</p>;
  if (error) return <p>{error}</p>;

  if (!dashboard) return <p>Preparing dashboard...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Dashboard</h2>

      <div style={{ display: "flex", gap: "16px", marginTop: "20px" }}>
        <StatCard title="Total Todos" value={dashboard.totalTodos} />
        <StatCard title="Completed" value={dashboard.completed} />
        <StatCard title="Pending" value={dashboard.pending} />
        <StatCard title="High Priority" value={dashboard.highPriority} />
      </div>

      <TodayTasks count={dashboard.todayTasks} />
    </div>
  );
};

export default UserDashboard;