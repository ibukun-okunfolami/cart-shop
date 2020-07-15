import React from "react";

const CartItems = ({ cartItem, removeProduct }) => {
  return (
    <li className="list__item">
      <img className="list__img" src={cartItem.image} alt="img" />
      <strong className="list__strong">{cartItem.title}</strong> €{cartItem.price}
      <span className="list__qtd">Qty: {cartItem.quantity}</span>
      <button className="list__btn" onClick={() => removeProduct(cartItem.id)}>
        <span className="list__btn-span">Remove from Cart</span>
      </button>
    </li>
  );
};

export default CartItems;
