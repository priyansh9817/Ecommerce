import { useState, useEffect } from "react";
import { useAuth } from "../../Context/auth";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth(); // No need to destructure setAuth here
  const navigate = useNavigate();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const token = auth?.token;
        if (!token) {
          setOk(false);
          navigate("/login");
          return;
        }

        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/auth/user-auth`, {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token in headers
          },
          withCredentials: true,
        });

        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
          navigate("/login");
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        setOk(false);
        navigate("/login");
      }
    };

    if (auth?.token) {
      authCheck();
    } else {
      navigate("/login");
    }
  }, [auth?.token, navigate]);

  return ok ? <Outlet /> : <Spinner path="" />;
}
