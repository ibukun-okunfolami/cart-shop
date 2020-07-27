import React, { useReducer } from "react";
import CartContext from "./cartContext";
import CartReducer from "./cartReducer";
import * as types from "../types";

const products = [
  {
    id: "p1",
    title: "Men Atwood Canvas Trainers",
    image: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg",
    price: 29.99,
  },
  {
    id: "p2",
    title: "Mens Speedcross 4 Trail Running Shoes",
    image: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg",
    price: 12.99,
  },
  {
    id: "p3",
    title: "Mens Tazon 6 FM Running Shoes",
    image: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg",
    price: 10.99,
  },
  {
    id: "p4",
    title: "Mens Status 2.0 Pexton Boat Shoes",
    image: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg",
    price: 42.99,
  },
  {
    id: "p5",
    title: "Men Atwood Canvas Trainers",
    image: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg",
    price: 29.99,
  },
  {
    id: "p6",
    title: "Men Atwood Canvas Trainers",
    image: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg",
    price: 29.99,
  },
];

const CartState = (props) => {
  const initialState = {
    cart: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addProductToCart = (product) => {
    setTimeout(() => {
      dispatch({ type: types.ADD_PRODUCT, product: product });
    }, 700);
  };

  const increaseQuantity = (productId) => {
    dispatch({ type: types.INCREASE_QUANTITY, productId: productId });
  };
  const decreaseQuantity = (productId) => {
    dispatch({ type: types.DECREASE_QUANTITY, productId: productId });
  };

  const removeProductFromCart = (productId) => {
    setTimeout(() => {
      dispatch({ type: types.REMOVE_PRODUCT, productId: productId });
    }, 700);
  };

  return (
    <CartContext.Provider
      value={{
        products: products,
        cart: state.cart,
        addProduct: addProductToCart,
        removeProduct: removeProductFromCart,
        increaseQuantity: increaseQuantity,
        decreaseQuantity,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
