import {
  Container,
  OutlineCard,
  SuccessSubtitle,
  SuccessTitle,
  IconContainer,
  OrderInfoContainer,
} from "./index.style";
import illustration from "../../assets/illustration.png";
import { CurrencyDollarSimple, MapPin, Timer } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContextProvider";

export function Success() {
  const { order } = useContext(OrderContext);

  return (
    <>
      <SuccessTitle>Uhul! Pedido confirmado</SuccessTitle>
      <SuccessSubtitle>
        Agora é só aguardar que logo o café chegará até você
      </SuccessSubtitle>
      <Container>
        <OutlineCard>
          <OrderInfoContainer>
            <IconContainer color={defaultTheme.colors.purple.default}>
              <MapPin width={16} fill="weight" color="white" />
            </IconContainer>
            <div>
              <p>
                Entrega em{" "}
                <b>
                  {order.street}, {order.number}
                </b>
              </p>
              <p>
                {order.district} - {order.city}, {order.state}
              </p>
            </div>
          </OrderInfoContainer>
          <OrderInfoContainer>
            <IconContainer color={defaultTheme.colors.yellow.default}>
              <Timer width={16} fill="weight" color="white" />
            </IconContainer>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <b>20 min - 30 min</b>
              </p>
            </div>
          </OrderInfoContainer>
          <OrderInfoContainer>
            <IconContainer color={defaultTheme.colors.yellow.dark}>
              <CurrencyDollarSimple width={16} fill="weight" color="white" />
            </IconContainer>
            <div>
              <p>Forma de pagamento</p>
              <p>
                <b>{order.paymentMethod}</b>
              </p>
            </div>
          </OrderInfoContainer>
        </OutlineCard>
        <img src={illustration} width={492} />
      </Container>
    </>
  );
}
