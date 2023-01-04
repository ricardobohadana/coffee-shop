import {
  ActionContainer,
  Card,
  CoffeeImgContainer,
  PriceActionContainer,
  Tag,
  TagContainer,
  Title,
  Subtitle,
  DollarSign,
  Price,
  AddToCartBtn,
  ItemCounter,
  Count,
  LessButton,
  MoreButton,
} from "./index.style";
import { Coffee } from "../../../../models/Coffee";
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/CartContextProvider";
import { coffeeImages } from "../../../../assets/coffee.images";

export type ProductImg = keyof typeof coffeeImages;

export function Product(coffee: Coffee) {
  const [amount, setAmount] = useState(1);
  const { handleAddItemToCart, cart } = useContext(CartContext);
  const handleAddToCart = () => {
    const cartItem = {
      item: coffee,
      amount,
    };
    handleAddItemToCart(cartItem);
  };
  const convertToCurrency = (price: number) => {
    return new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2 }).format(
      price
    );
  };

  const { id, src, title, subtitle, price, tags } = coffee;
  const imgSrc = coffeeImages[src];
  console.log(cart);
  return (
    <Card>
      <CoffeeImgContainer>
        <img src={imgSrc} width={120} />
      </CoffeeImgContainer>
      <Title>{title}</Title>
      <TagContainer>
        {tags.map((t) => {
          return <Tag key={id + t}>{t}</Tag>;
        })}
      </TagContainer>
      <Subtitle>{subtitle}</Subtitle>
      <PriceActionContainer>
        <div>
          <DollarSign>R$ </DollarSign>
          <Price>{convertToCurrency(price)}</Price>
        </div>
        <ActionContainer>
          <ItemCounter>
            <LessButton>
              <Minus
                width={14}
                weight="fill"
                onClick={() =>
                  setAmount((state) => (state - 1 >= 0 ? state - 1 : 0))
                }
              />
            </LessButton>
            <Count>{amount}</Count>
            <MoreButton>
              <Plus
                width={14}
                weight="fill"
                onClick={() => setAmount((state) => state + 1)}
              />
            </MoreButton>
          </ItemCounter>
          <AddToCartBtn>
            <ShoppingCartSimple
              width={22}
              weight="fill"
              onClick={handleAddToCart}
            />
          </AddToCartBtn>
        </ActionContainer>
      </PriceActionContainer>
    </Card>
  );
}
