import React from "react";
import Card from "./card";
import "./cardList.css";
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";
import { InfoState } from "../../context/Context";

const CardList = () => {
  const {
    state: { product },
    isLoading,
    info,
    page,
    setPage,
  } = InfoState();

  function handleNext() {
    setPage(2);
  }
  function handlePrev() {
    setPage(1);
  }

  return (
    <div>
      <div className="card-holder" id="products-page">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {info.map((item) => (
              <Card
                id={item.id}
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
            <br />
          </>
        )}
      </div>
      <div className="pagination">
        <button onClick={handlePrev}>
          <BsArrowLeftSquare /> Previous
        </button>
        <p>{page}</p>
        <button onClick={handleNext}>
          Next <BsArrowRightSquare />
        </button>
      </div>
    </div>
  );
};

export default CardList;
