export type Category = {
  id: number;
  name: string;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  image: string;
};
export type BasketItem = {
  product:Product
   id: number
  productId: number
  quantity: number
};
export type User = {
  id: number
  name: string
  email: string
  password: string
}
