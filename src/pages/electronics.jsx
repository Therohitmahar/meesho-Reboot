import React, { useEffect, useState } from "react";
import CardList from "../components/cardList/cardList";
import "../App.css";
export default function Electronics() {
  const [Electronics, setElectronics] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetching() {
      setLoading(true);
      const data = await fetch(
        "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?category=electronics"
      );
      const jsonData = await data.json();
      setElectronics(jsonData);

      setLoading(false);
    }
    fetching();
  }, []);
  useEffect(() => {
    if (!isLoading) console.log(Electronics);
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
          <h1 className="categoryTitle">Result for Electronics :</h1>
          {Electronics && (
            <CardList info={Electronics} pagination={false} route={true} />
          )}
        </div>
      )}
    </>
  );
}
