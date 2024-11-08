export type LoginData = {
  email: string;
  password: string;
};

export type Product = {
  id: number;
  imageUrl?: string;
  name: string;
  description: string;
  stock: number;
  price: number;
}