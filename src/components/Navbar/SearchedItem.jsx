import { Search } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function SearchedItem({ title, id, setShowSearch }) {
  const navigate = useNavigate();
  return (
    <div className="single-searched-item" style={{ padding: "5px 0" }}>
      <Search color="#f43397" />
      <span
        onClick={() => {
          setTimeout(() => {
            setShowSearch(false);
            navigate(`/product/${id}`);
          }, 0);
        }}
      >
        {title}
      </span>
    </div>
  );
}

export default SearchedItem;
