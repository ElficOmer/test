import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";

function CallCard() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        console.log(response.data);
        setCards(response.data.products);
      } catch (error) {
        console.error("Došlo je do greške:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div style={{ display: "flex" }}>
      {cards.map((item, index) => (
        <Card
          rating={item.rating}
          price={item.price}
          description={item.description}
          title={item.title}
        />
      ))}
    </div>
  );
}

export default CallCard;
