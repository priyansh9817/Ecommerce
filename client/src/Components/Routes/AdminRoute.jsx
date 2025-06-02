import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function AdminRoute() { // Ensure correct naming
  const [ok, setOk] = useState(false);
  const [auth] = useAuth(); // No need to use setAuth since we're only reading

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/auth/admin-auth`,
          {
            headers: {
              Authorization: `Bearer ${auth?.token}`, // ✅ Send Token in Header
            },
            withCredentials: true, // Allow cookies if needed
          }
        );

        setOk(res.data.ok);
      } catch (error) {
        console.error("Admin Auth Check Failed:", error.response?.data);
        setOk(false);
      }
    };

    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner path=" " />; // ✅ Redirect to login if unauthorized
}
