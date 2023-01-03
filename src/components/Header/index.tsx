import {
  ActionContainer,
  CartContainer,
  LocationContainer,
  Navbar,
  NotificationBadge,
} from "./index.style";
import { ShoppingCart, MapPin } from "phosphor-react";
import Logo from "../../assets/Logo.svg";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContextProvider";

export function Header() {
  const [index, setIndex] = useState(0);
  const { cart } = useContext(CartContext);
  const cities = ["Porto Alegre, RS", "Rio de Janeiro, RJ", "São Paulo, SP"];

  const handleLocationChange = () => {
    setIndex((state) => state + 1);
  };

  const notifications = cart.length;
  const shouldShowNotificationBadge = notifications > 0;

  return (
    <Navbar>
      <img src={Logo} alt="Coffe Delivery" width={85} />
      <ActionContainer>
        <LocationContainer onClick={handleLocationChange}>
          <MapPin size={22} weight="fill" />
          <span>{cities[index % 3]}</span>
        </LocationContainer>
        <CartContainer>
          {shouldShowNotificationBadge && (
            <NotificationBadge>{notifications}</NotificationBadge>
          )}
          <ShoppingCart size={22} weight="fill" />
        </CartContainer>
      </ActionContainer>
    </Navbar>
  );
}
