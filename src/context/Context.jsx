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
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "incQty":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        ),
      };
    case "decQty":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
        ),
      };
    case "clear":
      return {
        ...state,
        cart: [],
      };
    case "loadCart":
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
}

function Context({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    info: [],
    cart: [],
  });
  useEffect(() => {
    const savedCartData = JSON.parse(localStorage.getItem("cart"));
    if (savedCartData) {
      dispatch({ type: "loadCart", payload: savedCartData });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

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
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchInfo();
  }, [page]);

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        info,
        isLoading,
        page,
        setPage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export function InfoState() {
  return useContext(CartContext);
}

export default Context;
