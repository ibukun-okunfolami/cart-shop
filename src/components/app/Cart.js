import React, { useContext, Fragment, useEffect } from "react";
import CartContext from "../../context/cart/cartContext";
import LazyLoad from "react-lazyload";
import CartItems from "./CartItems";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const { cart, removeProduct } = cartContext;

  return (
    <Fragment>
      {cart.length <= 0 && <p className="no-item">No item in the Cart</p>}
      <ul className="list">
        {cart.map((cartItem) => (
          <CartItems key={cartItem.id} cartItem={cartItem} removeProduct={removeProduct} />
        ))}
      </ul>
    </Fragment>
  );
};

export default Cart;
