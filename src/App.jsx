import React, { useEffect, useState, useContext } from "react";
import Login from "./components/Auth/login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLodggedInUserData] = useState(null);
  const [userData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLodggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    // Admin login
    if (email === "admin@example.com" && password === "123") {
      const { admin } = getLocalStorage() || {};
      const adminData =
        admin && admin.length > 0
          ? admin[0]
          : { firstname: "Admin", email: "admin@example.com" };

      setUser("admin");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: adminData })
      );
    } else if (userData) {
      // Employee login
      const employee = userData.find(
        (e) => email === e.email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLodggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashboard changeUser={setUser} data={loggedInUserData} />
      ) : user === "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
