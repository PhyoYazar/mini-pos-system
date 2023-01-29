import type { RouteObject } from 'react-router-dom';

import RootLayout from '../components/Layout/RootLayout';
import ErrorPage from '../pages/error';
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
    ],
  },
];

export default routerConfig;
