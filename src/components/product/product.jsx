import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./product.css";
import { InfoState } from "../../context/Context";
import { CheckCircle2, ChevronsRight, ShoppingCart, Star } from "lucide-react";

const Product = () => {
  let { Id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [goToCart, setGoToCart] = useState(false);
  const [discountPercentage, setDiscountPercentage] = useState(getRandom());
  const [actualPrice, setActualPrice] = useState(0);

  const navigate = useNavigate();
  const {
    state: { cart },
    dispatch,
  } = InfoState();
  function ratingColor(rating) {
    if (typeof rating === "number") {
      if (rating <= 3) {
        return "rating spark yellow";
      } else {
        return "rating spark green";
      }
    }
    return "";
  }
  const colorClass = ratingColor(product.rating && product.rating.rate);

  function getRandom() {
    return Math.floor(Math.random() * 22);
  }

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(
        `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?&id=${Id}`
      );
      const converted = await response.json();
      setProduct(converted[0]);
      setLoading(false);
    };

    getProduct();
    setDiscountPercentage(getRandom());
  }, []);
  useEffect(() => {
    if (product.price) {
      setActualPrice(
        product.price + product.price * (discountPercentage * 0.01)
      );
    }
  }, [product.price, discountPercentage]);
  const LoadingCompo = () => {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <div className="product-page">
        <div className="left-side">
          <div className="image-holder  product-border">
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="button-holder">
            {!goToCart ? (
              <button
                className="btn addToCart"
                onClick={() => {
                  let isThereInCart = cart.some(
                    (item) => item.id == product.id
                  );
                  if (isThereInCart) {
                    dispatch({ type: "incQty", payload: product });
                  } else {
                    dispatch({
                      type: "addToCart",
                      payload: product,
                    });
                  }
                  setGoToCart(true);
                  setTimeout(() => {
                    setGoToCart(false);
                  }, 2000);
                }}
              >
                <ShoppingCart color="#f43397" />
                Add to Cart
              </button>
            ) : (
              <button className="btn addToCart">
                <CheckCircle2 color="#4ecd4c" />
                Added
              </button>
            )}

            <button
              className="btn buybtn"
              onClick={() => {
                let isThereInCart = cart.some((item) => item.id == product.id);
                if (isThereInCart) {
                  dispatch({ type: "incQty", payload: product });
                } else {
                  dispatch({
                    type: "addToCart",
                    payload: product,
                  });
                }
                navigate("/");
                navigate("/cart");
              }}
            >
              <ChevronsRight color="#ffffff" />
              Buy Now
            </button>
          </div>
        </div>
        <div className="right-side">
          <div className="Product-title product-border">
            <h4>{product.title}</h4>
            <h2>
              ₹{product.price}{" "}
              <span className="onwards" style={{ fontSize: "20px" }}>
                {actualPrice && actualPrice.toFixed()}
              </span>{" "}
              <span className="off">{discountPercentage}% off</span>
            </h2>
            <div>
              <span className={`${colorClass}`}>
                {product.rating && product.rating.rate}
                <Star color="#ffffff" />
              </span>

              <span>/ {product.rating && product.rating.count}Reviews</span>
              <br />
              <span className="free-delivery">Free Delivery</span>
            </div>
          </div>
          <div className="product-size  product-border">
            <h3>Select Size</h3>
            <button className="free-size">Free Size</button>
          </div>
          <div className="more-details product-border">
            <h2>Product Details</h2>
            <p>Name : {product.title}</p>
            <p>Net Quantity (N) : 1</p>
            <p>Description : {product.description}</p>

            <p className="more-info">More Information</p>
          </div>
        </div>
      </div>
    );
  };
  return <>{loading ? <LoadingCompo /> : <ShowProduct />}</>;
};

export default Product;
