import React, { useEffect, useState } from "react";
import CardList from "../components/cardList/cardList";
import "../App.css";
export default function WomensClothing() {
  const [WomensClothing, setWomensClothing] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetching() {
      setLoading(true);
      const data = await fetch(
        "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?category=women%27s%20clothing"
      );
      const jsonData = await data.json();
      setWomensClothing(jsonData);

      setLoading(false);
    }
    fetching();
  }, []);
  useEffect(() => {
    if (!isLoading) console.log(WomensClothing);
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
          <h1 className="categoryTitle">Result for Women's Clothing :</h1>
          {WomensClothing && (
            <CardList info={WomensClothing} pagination={false} route={true} />
          )}
        </div>
      )}
    </>
  );
}
