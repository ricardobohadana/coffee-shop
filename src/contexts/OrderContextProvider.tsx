import { createContext, ReactNode, useContext, useState } from "react";
import {
  FieldErrorsImpl,
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetFocus,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { Order, PaymentMethodEnum } from "../models/Order";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CartContext } from "./CartContextProvider";
import { Http } from "../api/http";
import { OrderDto } from "../api/dtos/Order.dto";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

interface IOrderContext {
  order: Order;
  register: UseFormRegister<OrderFormData>;
  watch: UseFormWatch<OrderFormData>;
  handleSubmit: UseFormHandleSubmit<OrderFormData>;
  handleCreateNewOrder: (data: OrderFormData) => void;
  handleFormErrors: (data: Partial<FieldErrorsImpl<OrderFormData>>) => void;
  setValue: UseFormSetValue<OrderFormData>;
  errors: Partial<FieldErrorsImpl<OrderFormData>>;
  setFocus: UseFormSetFocus<OrderFormData>;
}

const orderForm = zod.object({
  zipCode: zod
    .string()
    .min(8, "O CEP, no Brasil, possui 8 caracteres")
    .max(8, "O CEP, no Brasil, possui 8 caracteres"),
  street: zod.string().min(1, "Você deve especificar a rua do endereço"),
  number: zod
    .string()
    .min(1, "Você deve inserir o número do edifício/casa/condomínio"),
  moreInfo: zod.string().optional(),
  district: zod.string().min(1, "É necessário informar o bairro"),
  city: zod.string().min(1, "É necessário informar a cidade"),
  state: zod.string().min(1, "É necessário informar o estado").max(2),
  deliveryFee: zod.number(),
  paymentMethod: zod.nativeEnum(PaymentMethodEnum, {
    invalid_type_error: "É necessário selecionar um método de pagamento",
    required_error: "É necessário selecionar um método de pagamento",
    description: "É necessário selecionar um método de pagamento",
  }),
});

type OrderFormData = zod.infer<typeof orderForm>;

export const OrderContext = createContext<IOrderContext>({} as IOrderContext);

interface OrderContextProviderProps {
  children: ReactNode;
}

function handleFormErrors(data: Partial<FieldErrorsImpl<OrderFormData>>) {}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, setOrder] = useState<Order>({} as Order);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  function handleCreateNewOrder(data: OrderFormData) {
    setOrder(data);
    const orderData: OrderDto = {
      ...data,
      orderProducts: cart.map((c) => ({
        amount: c.amount,
        coffeeId: c.item.id,
      })),
    };
    toast.promise(() => Http.createOrder(orderData), {
      pending: "Executando pedido...",
      success: {
        render() {
          navigate("/success");
          return "Pedido executado com sucesso!";
        },
      },
      // caso faça o link com a api, sinta-se a vontade para alterar este método.
      error: {
        type: "success",
        render: () => {
          navigate("/success");
          return "Pedido executado com sucesso!";
        },
      },
    });
  }

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderForm),
  });

  return (
    <OrderContext.Provider
      value={{
        order,
        register,
        handleSubmit,
        watch,
        handleCreateNewOrder,
        handleFormErrors,
        setValue,
        errors,
        setFocus,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
