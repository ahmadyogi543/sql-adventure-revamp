import React, { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

import { authLogin, authLogout } from "../api/auth";
import { saveToken, getToken, removeToken } from "../utils/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(getToken() ? getToken() : "");
  const [user, setUser] = useState(getToken() ? jwtDecode(getToken()) : null);
  const [authenticated, setAuthenticated] = useState(!!getToken());

  const login = async (email, password) => {
    const token = await authLogin(email, password);
    setToken(token);
    setUser(jwtDecode(token));
    setAuthenticated(true);
    saveToken(token);
  };

  const logout = async () => {
    await authLogout(getToken());
    setToken("");
    setAuthenticated(false);
    removeToken();
  };

  useEffect(() => {
    if (!user) return;

    const expired = user.exp;
    const current = Math.floor(Date.now() / 1000);
    const expiration = (expired - current) * 1000;

    console.log(`expired: ${expired}`);
    console.log(`current: ${current}`);
    console.log(`expiration: ${expiration}`);

    function banishUser() {
      setUser(null);
      setToken("");
      removeToken();
      alert("ALERT: Sesi telah berakhir, silahkan login kembali!");
      window.location.href = "/";
    }

    if (expiration > 0) {
      setTimeout(banishUser, expiration - 5000);
    } else {
      banishUser();
    }
    // if (expiration > 0) {
    //   setTimeout(() => {
    //     banishUser();
    //   }, expiration - 10000);
    // } else {
    //   banishUser();
    // }
  }, [user]);

  return (
    <AuthContext.Provider value={{ authenticated, user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  return useContext(AuthContext);
}
