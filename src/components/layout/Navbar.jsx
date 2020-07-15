import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../context/cart/cartContext";

const Navbar = () => {
  const cartContext = useContext(CartContext);
  const [cartlenght, setCartlenght] = useState("");

  const { cart } = cartContext;

  useEffect(() => {
    const cart_length = cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0);
    setCartlenght(cart_length);
  }, [cart]);

  return (
    <nav className="container">
      <ul>
        <li>
          <NavLink className="brand" to="/">
            <h1 className="brand-name">xyz</h1>
          </NavLink>
        </li>

        <li>
          <NavLink className="link" to="/cart">
            {`Cart { ${cartlenght} }`}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
