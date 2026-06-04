import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

  const login = (jwtResponse) => {

    localStorage.setItem("token", jwtResponse.token);

    localStorage.setItem("email", jwtResponse.email);

    localStorage.setItem("businessId",
      jwtResponse.businessId);

    localStorage.setItem("role",
      jwtResponse.role);

    setToken(jwtResponse.token);
  };

  const logout = () => {

    localStorage.clear();

    setUser(null);

    setToken(null);
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        login,
        logout,
        isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}