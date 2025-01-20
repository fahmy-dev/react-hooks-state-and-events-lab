import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setInCart] = useState(false)
  function toggleCart() {
    setInCart((previsInCart) => !previsInCart);
  }

  const liClass = isInCart ? "in-cart" : "";
  const buttonText = isInCart ? "Remove From Cart" : "Add To Cart"

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
