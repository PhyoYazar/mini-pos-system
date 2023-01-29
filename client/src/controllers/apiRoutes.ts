export const apiRoutes = {
  // auth
  login: 'post:auth/login',

  // products
  getAllProducts: 'get:products',

  // category
  getAllCategory: 'get:category',

  // orders
  createOrder: 'post:orders',

  // getAllOrdersDetailsByUser: 'get:orders/details',
  getAllOrdersDetailsByUser: 'get:users',
  deleteOrderById: 'delete:orders',
  updateOrderById: 'patch:orders',

  payNow: 'post:orders/payNow',

  // buy
  // createBuyOneProduct: 'post:buy',
  // createBuyAllProductInOrders: 'post:',
};
