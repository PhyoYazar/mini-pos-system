export interface ProductInterface {
  _id: string;
  title: string;
  category: {
    _id: string;
    name: string;
  };
  price: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductsResInterface {
  status: string;
  results: number;
  data: ProductInterface[];
}
