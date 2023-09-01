import React from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function SearchedItem({ title, id, setShowSearch }) {
  const navigate = useNavigate();
  return (
    <div className="single-searched-item" style={{ padding: "5px 0" }}>
      <BiSearch />
      <span
        onClick={() => {
          navigate(`/`);
          setTimeout(() => {
            setShowSearch(false);
            navigate(`product/${id}`);
          }, 0);
        }}
      >
        {title}
      </span>
    </div>
  );
}

export default SearchedItem;
