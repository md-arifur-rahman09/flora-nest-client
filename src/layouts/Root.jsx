import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div>
          <nav>
            <Navbar></Navbar>
          </nav>
          <main className= ' h-96 md:min-h-screen'>
            <Outlet></Outlet>
          </main>
          <footer className="bg-gray-300 text-white py-6 mt-10">
            <Footer></Footer>
          </footer>
        </div>
    );
};

export default Root;