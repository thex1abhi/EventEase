import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">
          EventEase
        </Link>

        <div className="flex items-center space-x-4">
          <Link to="/" className="text-slate-700 hover:text-black">
            Home
          </Link>
          <Link to="/about" className="text-slate-700 hover:text-black">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
