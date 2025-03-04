import React from "react";
import Layouts from "../Components/Layouts/Layouts";
import { useAuth } from "../Context/auth";

const HomePage = () => {
  const [auth, setAuth] = useAuth()
  return (
    <Layouts title={"Best offers "}>
      <h1>HomePage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layouts>
  );
};

export default HomePage;