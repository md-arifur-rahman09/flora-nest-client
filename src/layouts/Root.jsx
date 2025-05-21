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
          <main>
            <Outlet></Outlet>
          </main>
          <footer>
            <Footer></Footer>
          </footer>
        </div>
    );
};

export default Root;