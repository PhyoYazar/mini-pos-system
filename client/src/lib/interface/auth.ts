export interface APILoginDataInterface {
  _id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: 0;
}

export interface APILoginResInterface {
  status: string;
  token: string;
  data: APILoginDataInterface;
}
