import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Navbar = () => {

  const {user, logOut, } = useContext(AuthContext);

  // console.log(user?.displayName);

  const handleLogout = () => {
    logOut()
    .then()
    .catch(error => console.log(error))
  }

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
            <NavLink to="/" className={({isActive})=> isActive ? 'text-blue-500 ' : ''} >
              <p className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" >Home</p>
            </NavLink>
            <NavLink className={({isActive})=> isActive ? 'text-blue-500' : ''}  to="/blog">
              <p className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Blog</p>
            </NavLink>
                {

                  user ? 
                      <div>
                        <img className="h-10 rounded-full" src={user?.photoURL} data-tip={user?.displayName} />
                        <Tooltip/>
                          

                      </div>
                 
                : <Link to="/login" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" > Login </Link>

                }
               <button onClick={handleLogout} className="btn btn-primary">Log out</button>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
