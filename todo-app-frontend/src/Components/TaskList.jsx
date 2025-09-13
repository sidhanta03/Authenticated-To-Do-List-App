// src/components/TaskList.jsx
import React, { useEffect, useState } from "react";
import API from "../utils/api.jsx";
import TaskForm from "./TaskForm.jsx";
import TaskItem from "./TaskItem.jsx";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchTasks = async () => {
    setError("");
    try {
      setLoading(true);
      const res = await API.get("/api/tasks");
      setTasks(res.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Could not fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = (task) => setTasks(prev => [task, ...prev]);
  const updateTask = (updated) => setTasks(prev => prev.map(t => t._id === updated._id ? updated : t));
  const removeTask = (id) => setTasks(prev => prev.filter(t => t._id !== id));

  return (
    <div>
      <TaskForm onAdd={addTask} />
      {loading ? (
        <div className="text-center">Loading tasks...</div>
      ) : error ? (
        <div className="text-center text-red-600">{error}</div>
      ) : tasks.length === 0 ? (
        <div className="text-center text-gray-600">No tasks yet — add one above.</div>
      ) : (
        <div className="mt-4">
          {tasks.map(task => (
            <TaskItem key={task._id} task={task} onUpdate={updateTask} onDelete={() => removeTask(task._id)} />
          ))}
        </div>
      )}
    </div>
  );
}
