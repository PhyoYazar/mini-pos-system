export const apiRoutes = {
  // auth
  login: `post:auth/login`,

  // products
  getAllProducts: `get:products`,

  // category
  getAllCategory: `get:category`,

  // orders 
  createOrder: `post:order`,
  updateOrder: `patch:order`,

  getAllOrdersByUser: `get:`,

  // buy
  createBuyOneProduct: `post:buy`,
  createBuyAllProductInOrders: `post:`
};
