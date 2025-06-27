import React, { use } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You are logged out",
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/login");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>

    <li><NavLink to='/allplants'>All Plants</NavLink></li>


    {user && <>
      <li><NavLink to='/addPlant'>Add Plants</NavLink></li>
      <li><NavLink to='/myPlants'>My Plants</NavLink></li>
      <li><NavLink to='/dashboard'>Dashboard</NavLink></li>

    </>}
    <li><NavLink to='/about'>About Us</NavLink></li>
  </>;

  return (
    <div className="sticky top-0 z-50 bg-green-100 shadow-sm ">
      <div className="max-w-screen-xl mx-auto px-4 navbar flex flex-wrap justify-between items-center">
        {/* Logo and Dropdown */}
        <div className="flex items-center gap-2">
          {/* Mobile Dropdown */}
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          {/* Logo */}
          <Link to='/' className="text-green-900 font-bold text-xl md:text-2xl whitespace-nowrap">
            🌿 Flora Nest
          </Link>
        </div>

        {/* Center Nav */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3 mt-2 lg:mt-0">
          {user ? (
            <>
              <div className="avatar tooltip" title={`${user.displayName} - ${user.email}`}>
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="User Avatar" />
                </div>
              </div>
              <button onClick={handleLogout} className="btn btn-error text-white btn-sm">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline btn-sm hover:bg-green-200">Login</Link>
              <Link to="/register" className="btn btn-primary btn-sm text-white">Register</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
