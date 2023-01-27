import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from './MainNavigation';

const PrivateLayout = () => {
  return (
    <>
      <MainNavigation />

      <main className='container'>
        <Outlet />
      </main>
    </>
  );
};

export default PrivateLayout;
