export interface OrderInterface {
  _id: string;
  user: string;
  product: {
    _id: string;
    title: string;
  };
  product_price: number;
  total_products: number;
  bought: boolean;
  createdAt: string;
  updatedAt: string;
  total_price: number;
  id: string;
}

export interface OrderDetailResInterface {
  status: string;
  data: {
    data: OrderInterface[];
    subTotal: number;
    tax: number;
    total: number;
  };
}
