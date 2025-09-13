// src/pages/Register.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await register(username, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}
        <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} className="w-full px-4 py-2 mb-4 border rounded" required />
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-2 mb-4 border rounded" required />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-2 mb-4 border rounded" required />
        <button className="w-full bg-green-600 text-white py-2 rounded">Register</button>
        <p className="mt-4 text-center text-sm">
          Already have an account? <Link to="/login" className="text-green-600">Login</Link>
        </p>
      </form>
    </div>
  );
}
