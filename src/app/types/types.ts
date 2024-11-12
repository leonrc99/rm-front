export type LoginData = {
  email: string;
  password: string;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  category: Category;
}

export type Category = {
  id: number;
  name: string;
}