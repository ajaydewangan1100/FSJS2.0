
import React from 'react'
import Footer from './footer';
import Header from './header';

import { Outlet } from 'react-router-dom';


const RouterMain = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default RouterMain;