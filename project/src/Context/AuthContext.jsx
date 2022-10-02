
import { useState } from "react";

import { createContext } from "react";
export const AuthContext = createContext();
export function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(true);
  const [token, setToken] = useState(null);
  const handleLogin = (token) => {
    setIsAuth(true);
    setToken(token);
  };
  const handleLogout = () => {
    setIsAuth(false);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuth, token, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
