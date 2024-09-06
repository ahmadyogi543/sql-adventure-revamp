import React, { createContext, useContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

import { authLogin, authLogout } from "../api/auth";
import { saveToken, getToken, removeToken } from "../utils/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getToken() ? jwtDecode(getToken()) : null);
  const [authenticated, setAuthenticated] = useState(!!getToken());

  const login = async (email, password) => {
    const token = await authLogin(email, password);
    setUser(jwtDecode(token));
    setAuthenticated(true);
    saveToken(token);
  };

  const logout = async () => {
    await authLogout(getToken());
    setAuthenticated(false);
    removeToken();
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
