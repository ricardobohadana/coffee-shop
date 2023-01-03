import { ProductImg } from "../pages/Home/components/Product";

export interface Coffee {
  id: string;
  price: number;
  title: string;
  subtitle: string;
  src: ProductImg;
  tags: string[];
}
