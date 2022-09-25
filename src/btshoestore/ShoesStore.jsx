import React, { Component } from "react";
import Modal from "./Modal";
import ProductsList from "./ProductsList";
import dataShoes from "./data.json";

export default class ShoesStore extends Component {
  state = {
    shoe: {},
  };

  setStateModal = (item) => {
    this.setState({
      shoe: item,
    });
    console.log(item);
  };

  render() {
    return (
      <div>
        <h1 className="my-3">Shop Shoes</h1>
        <ProductsList
          dataShoes={dataShoes}
          setStateModal={this.setStateModal}
        />
        <Modal shoe={this.state.shoe} />
      </div>
    );
  }
}
