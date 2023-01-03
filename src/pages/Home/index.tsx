import {
  IconGroup,
  Main,
  Products,
  ProductsTitle,
  Subtitle,
  Title,
} from "./index.styles";
import landingLogo from "../../assets/Imagem.svg";
import { IconText } from "./components/IconText";
import { defaultTheme } from "../../styles/themes/default";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { Product } from "./components/Product";
import { useQuery } from "react-query";
import { Http } from "../../api/http";

export function Home() {
  const { isLoading, isError, data } = useQuery(
    "home-coffees-query",
    Http.getCoffees
  );
  const coffees = data ?? [];

  const iconTexts = [
    {
      content: "Compra simples e segura",
      backgroundFillColor: defaultTheme.colors.yellow.dark,
      icon: <ShoppingCart size={16} weight="fill" color="white" />,
    },
    {
      content: "Embalagem mantém o café intacto",
      backgroundFillColor: defaultTheme.colors.base.text,
      icon: <Timer size={16} weight="fill" color="white" />,
    },
    {
      content: "Entrega rápida e rastreada",
      backgroundFillColor: defaultTheme.colors.purple.dark,
      icon: <Package size={16} weight="fill" color="white" />,
    },
    {
      content: "O café chega fresquinho até você",
      backgroundFillColor: defaultTheme.colors.yellow.default,
      icon: <Coffee size={16} weight="fill" color="white" />,
    },
  ];

  return (
    <>
      <Main>
        <div>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>
          <IconGroup>
            {iconTexts.map((iconText) => {
              return <IconText {...iconText} key={iconText.content} />;
            })}
          </IconGroup>
        </div>
        <img src={landingLogo} width={476} />
      </Main>
      <div>
        <ProductsTitle>Nossos cafés</ProductsTitle>
        <Products>
          {coffees?.map((coffee) => {
            return <Product {...coffee} key={coffee.id} />;
          })}
        </Products>
      </div>
    </>
  );
}
