import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div
      className="sidebar bg-dark text-white p-3"
      style={{ width: "250px", minHeight: "100vh" }}
    >
      <h5 className="text-center mb-4">Student Portal</h5>

      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <NavLink to="/home" className="nav-link text-white">
            Dashboard
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink to="/form" className="nav-link text-white">
            Add Student
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink to="/view" className="nav-link text-white">
            View Students
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink to="/attendance" className="nav-link text-white">
            Attendance
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink to="/viewAttendance" className="nav-link text-white">
            View Attendance
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink to="/test" className="nav-link text-white">
            Tests
          </NavLink>
        </li>

        <li className="nav-item">
          <button
            onClick={handleLogout}
            className="nav-link text-danger border-0 bg-transparent"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
