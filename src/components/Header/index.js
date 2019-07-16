import React from "react";

import { Container, Cart } from "./styles";
import logo from "../../assets/images/logo.svg";
import { mdShoppingBasket } from "react-icons";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong> Meu carrinho</strong>
          <span> 3 itens</span>
        </div>
        <mdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
