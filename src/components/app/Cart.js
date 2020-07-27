import React, { useContext, Fragment, useEffect } from "react";
import CartContext from "../../context/cart/cartContext";
import CartItems from "./CartItems";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const { cart, removeProduct, increaseQuantity, decreaseQuantity } = cartContext;

  return (
    <Fragment>
      {cart.length <= 0 && <p className="no-item">No item in the Cart</p>}
      <ul className="list">
        {cart.map((cartItem) => (
          <CartItems key={cartItem.id} cartItem={cartItem} removeProduct={removeProduct} increase={increaseQuantity} decrease={decreaseQuantity} />
        ))}
      </ul>
    </Fragment>
  );
};

export default Cart;
