// src/context/AuthContext.jsx
import React, { createContext, useContext, useState } from "react";
import API from "../utils/api.jsx";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const u = localStorage.getItem("user");
    return u ? JSON.parse(u) : null;
  });

  const saveAuth = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify({ _id: data._id, username: data.username, email: data.email }));
    setUser({ _id: data._id, username: data.username, email: data.email });
  };

  const login = async (email, password) => {
    const res = await API.post("/api/auth/login", { email, password });
    saveAuth(res.data);
    return res.data;
  };

  const register = async (username, email, password) => {
    const res = await API.post("/api/auth/register", { username, email, password });
    saveAuth(res.data);
    return res.data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
