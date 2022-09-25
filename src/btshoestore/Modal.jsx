import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    let { shoe } = this.props;
    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Product Details</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body text-left">
                <img
                  src={shoe.image}
                  alt=""
                  width={200}
                  height={200}
                  className="img-fluid"
                />
                <p>Name: {shoe.name}</p>
                <p>Price: ${shoe.price}</p>
                <p>Description: {shoe.description}</p>
                <p>Stock: {shoe.quantity}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
