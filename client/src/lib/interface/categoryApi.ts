export interface CategoryInterface {
  _id: string;
  name: string;
}

export interface CategoriesResInterface {
  status: string;
  data: CategoryInterface[];
}
