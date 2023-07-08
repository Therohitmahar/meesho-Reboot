import Product from "../product/product";
import "./card.css";
import { GiRoundStar } from "react-icons/gi";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Card({ id, title, price, image, rating }) {
  const navigate = useNavigate();
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
            {price} <span className="onwards">onwards</span>
          </h3>
          <p className="free-delivery-card">Free Delivery</p>
          <div className="review-container">
            <button className="star">
              {rating.rate} <FaStar />
            </button>
            <span className="review-count">/{rating.count} Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
}
