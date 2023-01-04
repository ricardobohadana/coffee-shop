import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocalStorage } from "../cache/useLocalStorage";
import { CartItem } from "../models/CartItem";

interface ICartContext {
  cart: CartItem[];
  handleUpdateCart: (item: CartItem) => void;
  handleAddItemToCart: (item: CartItem) => void;
  handleDeleteFromCart: (id: string) => void;
  handleRemoveSingleItemFromCart: (id: string) => void;
  handleAddSingleItemToCart: (id: string) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<ICartContext>({} as ICartContext);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const key = "cart";
  const [cart, setCart] = useState<CartItem[]>([]);
  const { getItem, setItem } = useLocalStorage();

  useEffect(() => {
    const storedData = getItem<CartItem[]>(key);
    if (!storedData) return;

    setCart(storedData);
  }, [setCart, getItem, key]);

  const handleRemoveSingleItemFromCart = (coffeeId: string) => {
    setCart((state) => {
      const currentItem = state.find((v) => v.item.id === coffeeId);
      if (currentItem) {
        currentItem.amount -= 1;
        const newArray = state.slice();
        const index = state.findIndex((ci) => ci.item.id === coffeeId);
        newArray[index] = currentItem;
        setItem(key, newArray);
        return newArray;
      }
      return state;
    });
  };

  const handleAddSingleItemToCart = (coffeeId: string) => {
    setCart((state) => {
      const currentItem = state.find((v) => v.item.id === coffeeId);
      if (currentItem) {
        currentItem.amount += 1;
        const newArray = state.slice();
        const index = state.findIndex((ci) => ci.item.id === coffeeId);
        newArray[index] = currentItem;
        setItem(key, newArray);
        return newArray;
      }
      return state;
    });
  };

  const handleAddItemToCart = (cartItem: CartItem) => {
    setCart((state) => {
      const currentItem = state.find((v) => v.item.id === cartItem.item.id);
      if (currentItem) {
        const newArray = state.slice();
        const index = state.findIndex((ci) => ci.item.id === cartItem.item.id);
        currentItem.amount += cartItem.amount;
        newArray[index] = currentItem;
        setItem(key, newArray);
        return newArray;
      } else {
        const newArray = [...state, cartItem];
        setItem(key, newArray);
        return [...state, cartItem];
      }
    });
  };

  const handleUpdateCart = (cartItem: CartItem) => {
    setCart((state) => {
      var newState = state.slice();
      const index = state.findIndex((ci) => ci.item.id === cartItem.item.id);
      newState[index] = cartItem;
      setItem(key, newState);
      return newState;
    });
  };

  const handleDeleteFromCart = (id: string) => {
    setCart((state) => {
      const newState = state.filter((s) => s.item.id !== id);
      setItem(key, newState);
      return newState;
    });
  };

  const context = {
    cart,
    handleUpdateCart,
    handleAddItemToCart,
    handleDeleteFromCart,
    handleRemoveSingleItemFromCart,
    handleAddSingleItemToCart,
  };
  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
}
