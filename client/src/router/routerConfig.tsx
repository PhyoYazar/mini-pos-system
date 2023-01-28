import type { RouteObject } from 'react-router-dom';

import PrivateLayout from '../components/Layout/PrivateLayout';
import RootLayout from '../components/Layout/RootLayout';
import ErrorPage from '../pages/error';
import Example from '../pages/examples';
import privateRoutes from './privateRoutes';
import publicRoutes from './publicRoutes';

const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // PUBLIC ROUTES
      { path: '', children: publicRoutes },

      // PRIVATE ROUTES
      {
        path: '',
        children: privateRoutes,
      },
      {
        path: 'exp',
        element: <Example />,
      },
    ],
  },
];

export default routerConfig;
