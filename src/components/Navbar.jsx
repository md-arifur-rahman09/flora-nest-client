import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {

  const { user, logOut, toogleTheme, dark } = use(AuthContext);
  const navigate = useNavigate()
  // console.log(user);

  const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/allplants'>All Plants</NavLink></li>
    {user && <>  <li><NavLink to='/addplants'>Add Plants</NavLink></li>
      <li><NavLink to='/myplants'>My Plants</NavLink></li>
    </>}


  </>


  // logout 
  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You are logged out",
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/login")
      }).catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className={dark ? "navbar bg-gray-700 shadow-sm " : "navbar bg-base-100 shadow-sm "}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}

          </ul>
        </div>
        <Link className='btn bg-white border-0  text-xl' to='/'> <button>🌿 Flora Nest</button></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}

        </ul>
      </div>
      <div className="navbar-end">
        <button onClick={toogleTheme} className='btn'>
          {dark ? " 🌞Light mode" : "🌙 Dark Mode"}
        </button>
        {user ?
          <> <div className="avatar" title={`${user.displayName} - ${user.email}`}>
            <div className="w-10 rounded mr-5">
              <img src={user.photoURL} alt="User Avatar" />
            </div>
          </div>
            <button onClick={handleLogout} className='btn'><a >Logout</a></button> </>
          : <>
            <Link className='btn' to='/login'>Login</Link>
            <Link to='/register'><button className='btn ml-5 bg-blue-500 text-white'>Register</button></Link>
          </>}
      </div>
    </div>
  );
};

export default Navbar;