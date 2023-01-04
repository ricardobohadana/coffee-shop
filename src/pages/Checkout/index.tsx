import { useContext } from "react";
import { CartContext } from "../../contexts/CartContextProvider";
import { CartProduct } from "./components/CartProduct";
import {
  CompleteYourOrder,
  FlexContainer,
  OrderDetails,
  OrderPaymentMethod,
  SelectedProducts,
} from "./index.style";

export function Checkout() {
  const { cart } = useContext(CartContext);
  const hasItemsInCart = cart.length > 0;
  return (
    <FlexContainer>
      <OrderDetails>
        <CompleteYourOrder />
        <OrderPaymentMethod />
      </OrderDetails>
      <SelectedProducts>
        {hasItemsInCart ? (
          cart.map((cartItem) => {
            return <CartProduct {...cartItem} />;
          })
        ) : (
          <p>Sem itens no carrinho</p>
        )}
      </SelectedProducts>
    </FlexContainer>
  );
}
