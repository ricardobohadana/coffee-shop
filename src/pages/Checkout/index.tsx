import { CurrencyDollar } from "phosphor-react";
import { useContext, useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContextProvider";
import {
  OrderContext,
  OrderContextProvider,
} from "../../contexts/OrderContextProvider";
import { ConvertToCurrency } from "../../helpers/ConvertToCurrency";
import { defaultTheme } from "../../styles/themes/default";
import { CartProduct } from "./components/CartProduct";
import { OrderForm } from "./components/OrderForm";
import { PaymentMethodButtonGroup } from "./components/PaymentMethodButtonGroup";
import { TitleHeader } from "./components/TitleHeader";
import {
  CheckoutInfoContainer,
  CompleteYourOrder,
  FlexContainer,
  LargeInfo,
  OrderButton,
  OrderDetails,
  OrderPaymentMethod,
  SelectedProducts,
  SmallInfo,
} from "./index.style";

export function Checkout() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length === 0) navigate("/");
  }, [cart]);

  const { setValue } = useContext(OrderContext);
  const cartSubtotalPrice = cart.reduce(
    (prev, curr) => prev + curr.amount * curr.item.price,
    0
  );
  const amountOfItemsInCart = cart.reduce(
    (prev, curr) => prev + curr.amount,
    0
  );
  const deliveryFee = cartSubtotalPrice / amountOfItemsInCart;
  const cartTotalPrice = cartSubtotalPrice + deliveryFee;
  const hasItemsInCart = cart.length > 0;

  useEffect(() => {
    setValue("deliveryFee", deliveryFee);
  }, [setValue, deliveryFee]);

  return (
    <FlexContainer>
      <OrderDetails>
        <CompleteYourOrder>
          <OrderForm />
        </CompleteYourOrder>
        <OrderPaymentMethod>
          <TitleHeader
            icon={
              <CurrencyDollar
                width={22}
                color={defaultTheme.colors.purple.default}
              />
            }
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          />
          <PaymentMethodButtonGroup />
        </OrderPaymentMethod>
      </OrderDetails>
      <SelectedProducts>
        {hasItemsInCart ? (
          cart.map((cartItem) => {
            return <CartProduct key={cartItem.item.id} {...cartItem} />;
          })
        ) : (
          <p>Sem itens no carrinho</p>
        )}
        <CheckoutInfoContainer>
          <SmallInfo>Total de Itens</SmallInfo>
          <SmallInfo>R$ {ConvertToCurrency(cartSubtotalPrice)}</SmallInfo>
        </CheckoutInfoContainer>
        <CheckoutInfoContainer>
          <SmallInfo>Entrega</SmallInfo>
          <SmallInfo>R$ {ConvertToCurrency(deliveryFee)}</SmallInfo>
        </CheckoutInfoContainer>
        <CheckoutInfoContainer>
          <LargeInfo>Total</LargeInfo>
          <LargeInfo>R$ {ConvertToCurrency(cartTotalPrice)}</LargeInfo>
        </CheckoutInfoContainer>
        <OrderButton type="submit" form="orderForm">
          confirmar pedido
        </OrderButton>
      </SelectedProducts>
    </FlexContainer>
  );
}
