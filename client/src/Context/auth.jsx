import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  // Load token from localStorage
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth(parseData);

      // ✅ Set axios header only if token exists
      if (parseData.token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${parseData.token}`;
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for auth
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
