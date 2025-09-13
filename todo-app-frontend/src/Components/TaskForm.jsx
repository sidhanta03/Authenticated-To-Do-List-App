// src/components/TaskForm.jsx
import React, { useState } from "react";
import API from "../utils/api.jsx";

export default function TaskForm({ onAdd }) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    setLoading(true);
    try {
      const res = await API.post("/api/tasks", { content });
      onAdd(res.data);
      setContent("");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to add task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex gap-2">
        <input value={content} onChange={(e)=>setContent(e.target.value)} placeholder="Add new task..." className="flex-1 px-3 py-2 border rounded" />
        <button type="submit" disabled={loading} className="px-4 py-2 bg-green-600 text-white rounded">{loading ? "Adding..." : "Add"}</button>
      </div>
    </form>
  );
}
