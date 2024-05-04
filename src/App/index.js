import React, { useEffect, useState } from "react";
import EmployeeList from "../Features/EmployeeList";
import Login from "../Features/Login";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect( () => {
    setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
  }, []
  );

  return <div>{isAuthenticated ? <EmployeeList /> : <Login  setIsAuthenticated ={setIsAuthenticated}/>}</div>;
};

export default App;
