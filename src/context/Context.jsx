import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const CartContext = createContext();
function cartReducer(state, action) {
  switch (action.type) {
    case "addToCart":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "removeFromCart":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id)
      };
    case "incQty":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty + 1) : c.qty),
      };
    case "decQty":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id === action.payload.id ? (c.qty = action.payload.qty - 1) : c.qty)
      };
    case "clear":
      return {
        cart: [],
      }
    default:
      return state;
  }
}
function Context({ children }) {

  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState([]);
  const [page, setPage] = useState(1);

  const fetchInfo = async () => {
    try {
      const response = await fetch(
        `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?limit=10&page=${page}`
      );
      const data = await response.json();
      setInfo(data);
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchInfo();
  }, [page]);

  const [state, dispatch] = useReducer(cartReducer, {
    info: info,
    cart: [],
  });
  return (
    <CartContext.Provider value={{ state, dispatch, info, isLoading, page, setPage }}>
      {children}
    </CartContext.Provider>
  );
}

export function InfoState() {

  return useContext(CartContext);
}

export default Context;
