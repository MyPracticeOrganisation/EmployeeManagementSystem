import React, { useState } from "react";

const Login = ({setIsAuthenticated}) => {
  const adminEmail = "asd@zxc.com";
  const adminPassword = "qwerty";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); //why its rendering on each click
    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem("is_authenticated", true);
      setIsAuthenticated(true);
    } else {
      localStorage.setItem("is_authenticated", false);
      setIsAuthenticated(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h1>Admin Login</h1>
        <label>email</label>
        <input
          name="email"
          id="email"
          type="email"
          //placeholder="admin@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          id="password"
          type="password"
          name="password"
          //placeholder="qwerty"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input style={{ marginTop: "12px" }} type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
