import { Order } from "../../models/Order";

export interface OrderProductsDto {
  coffeeId: string;
  amount: number;
}

export interface OrderDto extends Order {
  orderProducts: OrderProductsDto[];
}
