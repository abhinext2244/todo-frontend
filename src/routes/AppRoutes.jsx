import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import AddTodo from "../Pages/AddTodo";
import MyTodo from "../Pages/MyTodo";
import EditTodo from "../Pages/EditTodo";
import Category from "../Pages/Category";
import UserDashboard from "../Pages/UserDashboard";
import AdminDashboard from "../Pages/AdminDashboard";
import {AdminDashboardProvider} from "../contextApi/Dashboard/Admin/AdminDashboardContext";
import {CategoryProvider} from "../contextApi/category/CategoryContext";
import { TodoProvider } from "../contextApi/todo/TodoContext";
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todos/create" element={
          <TodoProvider>
          <CategoryProvider>
          <AddTodo />
          </CategoryProvider>
          </TodoProvider>
          } />
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
          path="/categories"
          element={
            <CategoryProvider>
              <Category />
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
      </Routes>
      <Routes>
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
      </Routes>
      <Routes>
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
      </Routes>
    </div>
  );
};

export default AppRoutes;
