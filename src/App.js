import React from "react";
import Store from "./components/app/Store";
import Cart from "./components/app/Cart";
import Navbar from "./components/layout/Navbar";
import CartState from "./context/cart/cartState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <CartState>
      <Router>
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Store} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    </CartState>
  );
};

export default App;
