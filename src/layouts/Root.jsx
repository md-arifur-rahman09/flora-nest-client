import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import { AuthContext } from '../context/AuthContext';

const Root = () => {

  const navigation=useNavigation();
  const isNavigating= Boolean(navigation.location);

    return (
        <div  >
          <nav>
            <Navbar></Navbar>
          </nav>
          <main className= 'min-h-screen'>
          {isNavigating && <><span className="loading loading-ring loading-xl text-center "></span><span className="loading loading-ring loading-xl text-center "></span><span className="loading loading-ring loading-xl text-center "></span></>}
            <Outlet></Outlet>
          </main>
          <footer className="bg-gray-300 text-white py-6 mt-10">
            <Footer></Footer>
          </footer>
        </div>
    );
};

export default Root;