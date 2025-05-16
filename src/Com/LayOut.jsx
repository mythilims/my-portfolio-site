import React from 'react';
import Nav from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <Nav />
      <main >
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default Layout;
