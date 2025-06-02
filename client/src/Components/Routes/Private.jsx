import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth"; // Note ye auth.jsx se useAuth ko import kiya gaya hai jo ki context api ka part hai
import { Outlet } from "react-router-dom"; // Note ye routing ke functionallities ke liye hota hai agar ye {const [auth, setAuth] = useAuth();}
import axios from "axios";
import Spinner from "../Spinner"; // Spinner component ko import kiya gaya hai jo ki loading state dikhata hai
// Note ye PrivateRoute component ko create kiya gaya hai jo ki user ke authentication ko check karta hai aur agar user authenticated hai to Outlet render karega

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