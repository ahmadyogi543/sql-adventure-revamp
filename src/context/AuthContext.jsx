import React, { createContext, useContext, useState } from "react";

import { authLogin, authLogout } from "../api/auth";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [authenticated, setAuthenticated] = useState(true);

  const login = async (email, password) => {
    try {
      const token = await authLogin(email, password);
      setUser(jwtDecode(token));
      setAuthenticated(true);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const logout = async () => {
    try {
      await authLogout();
      setAuthenticated(false);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <AuthContext.Provider value={{ authenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  return useContext(AuthContext);
}
