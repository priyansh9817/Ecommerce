import { useState, useEffect } from "react";
import { useAuth } from "../../Context/auth";
import { Outlet } from "react-router-dom"; // Note ye routing ke functionallities ke liye hota hai agar ye {const [auth, setAuth] = useAuth();}
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute() {
  
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth(); // to get useAuth from auth.jsx

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("/api/v1/auth/user-auth"); 
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;

}