import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { item, setStateModal } = this.props;
    return (
      <div className="col-4 mb-3">
        <div className="card">
          <img className="card-img-top img-fluid" src={item.image} alt />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <h4
              className="card-text text-danger"
              style={{ fontWeight: "bold" }}
            >
              ${item.price}
            </h4>
            <p>{item.shortDescription}</p>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-success"
              onClick={() => setStateModal(item)}
              data-toggle="modal"
              data-target="#modelId"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    );
  }
}
