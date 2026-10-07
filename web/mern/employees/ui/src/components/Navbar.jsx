import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-6">
        <div className="flex items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-lg px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/employees"
            className={({ isActive }) =>
              `rounded-lg px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`
            }
          >
            Employees
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;