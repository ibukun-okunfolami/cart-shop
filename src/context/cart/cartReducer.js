import { ADD_PRODUCT, REMOVE_PRODUCT, INCREASE_QUANTITY, DECREASE_QUANTITY } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const cartItems = [...state.cart];
      const itemExists = cartItems.findIndex((item) => item.id === action.product.id);
      if (itemExists < 0) {
        return {
          ...state,
          cart: [...state.cart, { ...action.product, quantity: 1 }],
        };
      }
      const cartItem = { ...cartItems[itemExists] };
      cartItem.quantity++;
      cartItems[itemExists] = cartItem;
      return {
        ...state,
        cart: cartItems,
      };

    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.productId) {
            item.quantity++;
          }
          return item;
        }),
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.productId) {
            item.quantity--;
          }
          return item;
        }),
      };

    case REMOVE_PRODUCT:
      console.log("removing");
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.productId),
      };
    default:
      return state;
  }
};
