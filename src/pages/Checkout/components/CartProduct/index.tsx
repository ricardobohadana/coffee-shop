import { Minus, Plus, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { coffeeImages } from "../../../../assets/coffee.images";
import { CartContext } from "../../../../contexts/CartContextProvider";
import { ConvertToCurrency } from "../../../../helpers/ConvertToCurrency";
import { CartItem } from "../../../../models/CartItem";
import { Coffee } from "../../../../models/Coffee";
import { defaultTheme } from "../../../../styles/themes/default";
import {
  Count,
  Currency,
  FlexContainer,
  ItemCounter,
  ItemTitle,
  LessButton,
  LineSeparator,
  MoreButton,
  RemoveButton,
  RemoveText,
} from "./index.style";

export function CartProduct(cartItem: CartItem) {
  const { id, src, title, subtitle, price, tags } = cartItem.item;
  const amount = cartItem.amount;
  const {
    cart,
    handleAddSingleItemToCart,
    handleRemoveSingleItemFromCart,
    handleDeleteFromCart,
  } = useContext(CartContext);
  const imgSrc = coffeeImages[src];
  const totalPrice = price * amount;
  const totalPriceString = ConvertToCurrency(totalPrice);
  return (
    <>
      <FlexContainer gap="3.125rem">
        <FlexContainer>
          <img src={imgSrc} width={64} />
          <div>
            <ItemTitle>{title}</ItemTitle>
            <FlexContainer gap="0.5rem">
              <ItemCounter>
                <LessButton>
                  <Minus
                    width={14}
                    weight="fill"
                    onClick={() => handleRemoveSingleItemFromCart(id)}
                  />
                </LessButton>
                <Count>{amount}</Count>
                <MoreButton>
                  <Plus
                    width={14}
                    weight="fill"
                    onClick={() => handleAddSingleItemToCart(id)}
                  />
                </MoreButton>
              </ItemCounter>
              <RemoveButton onClick={() => handleDeleteFromCart(id)}>
                <Trash width={16} color={defaultTheme.colors.purple.default} />
                <RemoveText>remover</RemoveText>
              </RemoveButton>
            </FlexContainer>
          </div>
        </FlexContainer>
        <Currency>R$ {totalPriceString}</Currency>
      </FlexContainer>
      <LineSeparator />
    </>
  );
}
