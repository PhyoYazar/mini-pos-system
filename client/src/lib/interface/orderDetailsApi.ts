export interface OrderInterface {
  _id: string;
  user: string;
  product: {
    _id: string;
    title: string;
  };
  product_price: number;
  total_products: number;
  total_price: number;
  bought: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface OrderUpdatedResInterface {
  status: string;
  data: OrderInterface[];
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

export interface PayNowResInterface {
  status: string;
  message: string;
  data: object[];
}
