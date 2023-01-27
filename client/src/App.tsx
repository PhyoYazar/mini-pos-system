import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routerConfig from './router/routerConfig';

function App() {
  const router = createBrowserRouter(routerConfig);

  return <RouterProvider router={router} />;
}

export default App;
