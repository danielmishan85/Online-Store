import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { fontSize } from "@mui/system";

export default function Header(props) {
  return (
    <header className="header">
      <a href="#/">
        <header>Our Store</header>
      </a>

      <div className="cart">
        <a href="#/cart">
          Cart
          <ShoppingCartIcon />
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ""
          )}
        </a>{" "}
      </div>
    </header>
  );
}
