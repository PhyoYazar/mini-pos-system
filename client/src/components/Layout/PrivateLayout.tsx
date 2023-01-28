import React from 'react';
import { Outlet } from 'react-router-dom';

const PrivateLayout = () => {
  return (
    <>
      {/* <MainNavigation /> */}

      <main className='w-full h-screen container'>
        <Outlet />
      </main>
    </>
  );
};

export default PrivateLayout;
