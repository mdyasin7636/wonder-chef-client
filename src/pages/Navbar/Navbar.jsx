import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {

  const {user} = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              Wonder Chef
            </Link>
          </div>
          <div className="flex">
            <Link to="/" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" >
              Home
            </Link>
            <Link to="/blog" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" >
              Blog
            </Link>
            <Link to="/login" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" >
              Login 
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
