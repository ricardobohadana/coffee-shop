export enum PaymentMethodEnum {
  CREDIT = "Cartão de Crédito",
  DEBIT = "Cartão de Débito",
  MONEY = "Dinheiro",
}

export interface Order {
  zipCode: string;
  street: string;
  number: string;
  moreInfo?: string;
  district: string;
  city: string;
  state: string;
  paymentMethod: PaymentMethodEnum;
  deliveryFee: number;
}
