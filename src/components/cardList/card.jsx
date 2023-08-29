import { Star } from "lucide-react";
import Product from "../product/product";
import "./card.css";
import { useNavigate } from "react-router-dom";
export default function Card({ id, title, price, image, rating }) {
  const navigate = useNavigate();
  function ratingColor(rating) {
    if (rating <= 3) {
      return "star yellow";
    } else {
      return "star green";
    }
  }

  function getRandom() {
    return Math.floor(Math.random() * 22);
  }
  const discountPercentage = getRandom();
  const actualPrice = price + price * (discountPercentage * 0.01);
  return (
    <div>
      <div
        className="card-container"
        onClick={() => {
          navigate(`product/${id}`);
        }}
      >
        <div className="card-image">
          <img alt="card" src={image} />
        </div>
        <div className="card-details">
          <p className="card-title card-naam">{title}</p>
          <h3 className="card-price">
            <span>₹</span>
            {price} <span className="onwards">{actualPrice.toFixed()}</span>
            <span className="off">{discountPercentage}% off</span>
          </h3>
          <p className="free-delivery-card">Free Delivery</p>
          <div className="review-container">
            <span className={ratingColor(rating.rate)}>
              {rating.rate}
              <Star
                color="#ffffff"
                size={13}
                strokeWidth={3}
                absoluteStrokeWidt
              />
            </span>
            <span className="review-count">/{rating.count} Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
}
