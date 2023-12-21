import React, { useState } from "react";
import { useSelector } from "react-redux";
import { findCardId } from "./cardsSlice";// import selector


export default function Card({ id }) {
  const card = useSelector(findCardId); // replace this with a call to your selector to get a card by id
  const [flipped, setFlipped] = useState(false);
  console.log(card)

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
