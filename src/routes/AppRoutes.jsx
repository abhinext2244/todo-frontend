import { Route, Routes } from "react-router-dom";

import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import AddTodo from "../Pages/AddTodo";
import MyTodo from "../Pages/MyTodo";
import EditTodo from "../Pages/EditTodo";
import Category from "../Pages/Category";
import UserDashboard from "../Pages/UserDashboard";
import AdminDashboard from "../Pages/AdminDashboard";
import Home from "../Pages/Home";

import { AdminDashboardProvider } from "../contextApi/Dashboard/Admin/AdminDashboardContext";
import { CategoryProvider } from "../contextApi/category/CategoryContext";
import { TodoProvider } from "../contextApi/todo/TodoContext";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      {/* Todos */}
      <Route
        path="/todos"
        element={
          <CategoryProvider>
            <TodoProvider>
              <MyTodo />
            </TodoProvider>
          </CategoryProvider>
        }
      />

      <Route
        path="/todos/create"
        element={
          <CategoryProvider>
            <TodoProvider>
              <AddTodo />
            </TodoProvider>
          </CategoryProvider>
        }
      />

      <Route
        path="/todos/:id"
        element={
          <CategoryProvider>
            <TodoProvider>
              <EditTodo />
            </TodoProvider>
          </CategoryProvider>
        }
      />

      {/* Categories */}
      <Route
        path="/categories"
        element={
          <CategoryProvider>
            <Category />
          </CategoryProvider>
        }
      />

      {/* User Dashboard */}
      <Route
        path="/dashboard"
        element={
          <CategoryProvider>
            <TodoProvider>
              <UserDashboard />
            </TodoProvider>
          </CategoryProvider>
        }
      />

      {/* Admin Dashboard */}
      <Route
        path="/admin/dashboard"
        element={
          <AdminDashboardProvider>
            <CategoryProvider>
              <TodoProvider>
                <AdminDashboard />
              </TodoProvider>
            </CategoryProvider>
          </AdminDashboardProvider>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
