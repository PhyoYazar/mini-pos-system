
export default [
  {
    index: true,
    element: <div className="">Home</div>,
  },
  {
    path: 'cart-orders',
    element: <div className="">All Carts</div>,
    // loader: ({ request }) =>
    //   fetch("/api/dashboard.json", {
    //     signal: request.signal,
    //   }),
  },
  {
    path: 'buy-products',
    element: <div className="">Already bought</div>
  },
];
