import { Minus, Plus, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { coffeeImages } from "../../../../assets/coffee.images";
import { CartContext } from "../../../../contexts/CartContextProvider";
import { CartItem } from "../../../../models/CartItem";
import { Coffee } from "../../../../models/Coffee";
import {
  Count,
  FlexContainer,
  ItemCounter,
  ItemTitle,
  LessButton,
  MoreButton,
  RemoveButton,
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
  return (
    <FlexContainer>
      <FlexContainer>
        <img src={imgSrc} />
        <div>
          <ItemTitle>{title}</ItemTitle>
          <FlexContainer>
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
            <RemoveButton>
              <Trash
                width={16}
                weight="fill"
                onClick={() => handleDeleteFromCart(id)}
              />
            </RemoveButton>
          </FlexContainer>
        </div>
      </FlexContainer>
    </FlexContainer>
  );
}
