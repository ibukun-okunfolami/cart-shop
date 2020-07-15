import React, { useContext } from "react";
import CartContext from "../../context/cart/cartContext";
import StoreItem from "./StoreItem";

const Store = () => {
  const cartContext = useContext(CartContext);
  const { products, addProduct } = cartContext;

  return (
    <div>
      <ul className="product-list">
        {products.map((product) => (
          <StoreItem key={product.id} product={product} addProduct={addProduct} />
        ))}
      </ul>
    </div>
  );
};

export default Store;
