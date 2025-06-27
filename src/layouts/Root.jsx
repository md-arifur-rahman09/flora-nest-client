import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import { AuthContext } from '../context/AuthContext';
import Loading from '../components/Loading';

const Root = () => {

  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <div  >
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className='min-h-screen'>
        {isNavigating && <Loading></Loading>}
        <Outlet></Outlet>
      </main>
      <footer className=" text-white  ">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;