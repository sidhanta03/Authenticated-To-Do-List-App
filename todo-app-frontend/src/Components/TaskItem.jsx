// src/components/TaskItem.jsx
import React, { useState } from "react";
import API from "../utils/api.jsx";

export default function TaskItem({ task, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(task.content);
  const [busy, setBusy] = useState(false);

  const toggleComplete = async () => {
    setBusy(true);
    try {
      const res = await API.put(`/api/tasks/${task._id}`, { completed: !task.completed });
      onUpdate(res.data);
    } catch (err) {
      console.error(err);
      alert("Error updating task");
    } finally {
      setBusy(false);
    }
  };

  const saveEdit = async () => {
    if (!content.trim()) return;
    setBusy(true);
    try {
      const res = await API.put(`/api/tasks/${task._id}`, { content });
      onUpdate(res.data);
      setEditing(false);
    } catch (err) {
      console.error(err);
      alert("Error saving task");
    } finally {
      setBusy(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Delete this task?")) return;
    setBusy(true);
    try {
      await API.delete(`/api/tasks/${task._id}`);
      onDelete(task._id);
    } catch (err) {
      console.error(err);
      alert("Error deleting task");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex items-center justify-between bg-white p-3 rounded shadow mb-2">
      <div className="flex items-center gap-3">
        <input type="checkbox" checked={task.completed} onChange={toggleComplete} disabled={busy} />
        {editing ? (
          <input className="border px-2 py-1 rounded" value={content} onChange={(e)=>setContent(e.target.value)} />
        ) : (
          <span className={`${task.completed ? "line-through text-gray-400" : ""}`}>{task.content}</span>
        )}
      </div>

      <div className="flex items-center gap-2">
        {editing ? (
          <>
            <button onClick={saveEdit} disabled={busy} className="px-2 py-1 bg-blue-500 text-white rounded">Save</button>
            <button onClick={() => { setEditing(false); setContent(task.content); }} className="px-2 py-1 bg-gray-200 rounded">Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => setEditing(true)} className="px-2 py-1 bg-yellow-300 rounded">Edit</button>
            <button onClick={handleDelete} disabled={busy} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
          </>
        )}
      </div>
    </div>
  );
}
