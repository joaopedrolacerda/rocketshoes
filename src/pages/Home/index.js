import React, { Component } from "react";
import { formatPrice } from "../../util/format";
import { MdAddShoppingCart } from "react-icons/md";
import { ProductList } from "./styles";
import api from "../../services/api";

export default class Home extends Component {
  state = {
    products: []
  };
  async componentDidMount() {
    const response = await api.get("products");

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price)
    }));
    this.setState({ products: data });
  }
  render() {
    const { products } = this.state;
    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong> {product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button>
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </button>
            <div />
          </li>
        ))}
      </ProductList>
    );
  }
}
