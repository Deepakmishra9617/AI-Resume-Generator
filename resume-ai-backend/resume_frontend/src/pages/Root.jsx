import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
// App start hone pe theme set karega
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
function Root() {
  return (
    <div>
      {/* navbar */}
      <Navbar />

      <Outlet />
    </div>
  );
}

export default Root;