import React, { useState, useEffect } from "react"; // If we want to get something at initial time we use UseEffect 
import { useNavigate, useLocation } from "react-router-dom";
const Spinner = () => {
  const [count, setCount] = useState(5); // ye ham issliye bana rahe hai kyu ki jab koi content nhi mile to ye navigate kar de naa ki hamesha spinner show ho 
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);   // ye count reverse me hone ke liye hai 
    }, 1000);
    count === 0 &&       // Agar count == 0 hai to ham navigate karwa dege 
      navigate("/login", {
        state: location.pathname,
      });
    return () => clearInterval(interval);  // Cleanup function call karne ke liye hota hai
  }, [count, navigate, location]);
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h1 className="Text-center">redirecting to you in {count} second </h1>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;