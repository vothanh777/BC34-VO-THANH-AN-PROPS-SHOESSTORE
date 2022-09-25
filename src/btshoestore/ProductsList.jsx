import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductsList extends Component {
  render() {
    let { dataShoes, setStateModal } = this.props;
    const renderShoes = () => {
      return dataShoes.map((item, index) => {
        return (
          <ProductItem key={index} item={item} setStateModal={setStateModal} />
        );
      });
    };
    return (
      <div className="container">
        <div className="row">{renderShoes()}</div>
      </div>
    );
  }
}
