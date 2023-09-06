import React, { useEffect, useState } from "react";
import CardList from "../components/cardList/cardList";
import "../App.css";
export default function Jewellery() {
  const [jewellery, setJewellery] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetching() {
      setLoading(true);
      const data = await fetch(
        "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?category=jewelery"
      );
      const jsonData = await data.json();
      setJewellery(jsonData);

      setLoading(false);
    }
    fetching();
  }, []);
  useEffect(() => {
    if (!isLoading) console.log(jewellery);
  }, [isLoading]);
  console.log(isLoading);

  return (
    <>
      {isLoading ? (
        <>
          <div className="categoryPage">
            <h2>Loading...</h2>
          </div>{" "}
        </>
      ) : (
        <div className="categoryPage">
          <h1 className="categoryTitle">
            Result for Jewellery And Accessiories :
          </h1>
          {jewellery && (
            <CardList info={jewellery} pagination={false} route={true} />
          )}
        </div>
      )}
    </>
  );
}
