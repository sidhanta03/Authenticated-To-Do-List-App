// src/pages/Dashboard.jsx
import React from "react";
import { useAuth } from "../context/AuthContext.jsx";
import TaskList from "../Components/TaskList.jsx";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Welcome, {user?.username}</h1>
          <button onClick={logout} className="px-3 py-1 bg-red-500 text-white rounded">Logout</button>
        </header>

        <main>
          <TaskList />
        </main>
      </div>
    </div>
  );
}
