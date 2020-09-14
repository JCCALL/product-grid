import React, { Component } from "react";
import "./style.css";

class ProductGrid extends Component {
  render() {
    return (
      <div className=" container main my-5">
        <div className="row">
          <div className="main-header text-center">
            <h3>Products</h3>
          </div>
        </div>
        <div className="row">
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Product Name</th>
                <th scope="col">Discription</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">DELETE</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductGrid;
