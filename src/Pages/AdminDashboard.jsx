import { useAdminDashboard } from "../contextApi/Dashboard/Admin/useAdminDashboard";
import { useLoading } from "../contextApi/useLoading";
import AdminStatCard from "../components/Admin/AdminStatCard";
import RecentUsers from "../components/Admin/RecentUsers";
import RecentTodos from "../components/Admin/RecentTodos";


const AdminDashboard = () => {
  const { dashboard, error } = useAdminDashboard();
  const { loading } = useLoading();

  console.log("admindashboard", dashboard);

  if (loading) return <p>Loading dashboard...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;
  if (!dashboard) return null; // 🔥 THIS LINE FIXES THE CRASH

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AdminStatCard title="Total Users" value={dashboard.stats.users} />
        <AdminStatCard title="Total Todos" value={dashboard.stats.todos} />
        <AdminStatCard
          title="Completed Todos"
          value={dashboard.stats.completedTodos}
        />
        <AdminStatCard
          title="Pending Todos"
          value={dashboard.stats.pendingTodos}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <RecentUsers users={dashboard.recentUsers} />
        <RecentTodos todos={dashboard.recentTodos} />
      </div>
    </div>
  );
};

export default AdminDashboard;
