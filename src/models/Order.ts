export type PaymentMethod = "Cartão de Crédito" | "Cartão de Débito" | "Boleto Bancário";

export interface Order {
  zipCode: string;
  street: string;
  number: string;
  moreInfo: string;
  district: string;
  city: string
  state: string;
  paymentMethod: PaymentMethod;
  deliveryFee: number;
}