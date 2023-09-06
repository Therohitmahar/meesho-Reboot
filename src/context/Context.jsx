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
  const [allProducts, setAllProducts] = useState([]);

  const [page, setPage] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("Cash On Delivery");
  const [codSelected, setCodSelected] = useState(true);
  const [address, setAddress] = useState({
    name: "",
    phoneNumber: "",
    roadName: "",
    houseName: "",
    pincode: "",
    city: "",
    state: "",
  });
  useEffect(() => {
    let localAddress = JSON.parse(localStorage.getItem("address"));
    if (localAddress) {
      setAddress(localAddress);
    }
    let localPayment = JSON.parse(localStorage.getItem("paymentMode"));
    if (localPayment) {
      setPaymentMethod(JSON.stringify(localPayment));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("address", JSON.stringify(address));
    localStorage.setItem("paymentMode", JSON.stringify(paymentMethod));
  }, [address, paymentMethod]);
  function getEstimate() {
    const deliveryDate = new Date();
    let date = deliveryDate.getDate();
    let month = deliveryDate.getMonth() + 1;
    const year = deliveryDate.getFullYear();
    if (date >= 24) {
      date = 1;
      month += 1;
    } else {
      date += 5;
    }
    return `${date}/${month}/${year}`;
  }
  let deliveryDate = getEstimate();
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
  async function fetchAllProduct() {
    const jsonData = await fetch(
      "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products"
    );
    const converted = await jsonData.json();
    setAllProducts(converted);
  }

  useEffect(() => {
    fetchInfo();
    fetchAllProduct();
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
        deliveryDate,
        paymentMethod,
        setPaymentMethod,
        codSelected,
        setCodSelected,
        address,
        setAddress,
        allProducts,
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
