import HomePage from '../pages/home/home-page';

export default [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: 'cart-orders',
    element: <div className=''>All Carts</div>,
    // loader: ({ request }) =>
    //   fetch("/api/dashboard.json", {
    //     signal: request.signal,
    //   }),
  },
  {
    path: 'buy-products',
    element: <div className=''>Already bought</div>,
  },
];
