import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";
import Buttons from "../Buttons/index";
import Delete from "../Delete/index";

const sortTypes = {
	up: {
		class: 'sort-up',
		fn: (a, b) => a.net_worth - b.net_worth
	},
	down: {
		class: 'sort-down',
		fn: (a, b) => b.net_worth - a.net_worth
	},
	default: {
		class: 'sort',
		fn: (a, b) => a
	}
};

class ProductGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
      currentSort: "default"
    };
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    API.getProducts().then((res) => {
      const products = res.data.map((data) => ({
        image: data.image,
        title: data.title,
        description: data.description,
        quantity: data.quantity,
        price: data.price,
        id: data.id,
      }));
      this.setState({
        product: products,
      });
    });
  };

  deleteProduct = (id) => {
    console.log(id);
    API.deleteProduct(id)

      .then((res) => this.loadProducts())
      .catch((err) => console.log(err));
  };

  onSortChange = () => {
      const { currentSort } = this.state;
      let nextSort;
 
      if (currentSort === "down") nextSort = "up";
      else if (currentSort === "up") nextSort = "default";
      else if (currentSort === "default") nextSort = "down";

      this.setState({
          currentSort: nextSort
      });
  };

  render() {
    const { data } = this.props;
    const { currentSort } = this.state;
    return (
      <div className=" container main my-5">
        <div className="row">
          <div className="col-8">
            <h3>Products</h3>
          </div>
          <div className="col-4 float-right">
            <Buttons />
          </div>
        </div>
        <div className="row">
          <table id="pGrid" className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">
                  ID
                </th>
                <th scope="col">Image</th>
                <th scope="col">
                  Product Name
                </th>
                <th scope="col">Description</th>
                <th scope="col">
                    Quantity
                </th>
                <th scope="col">
                    <button onClick={this.onSortChange}>
                  Price
                  </button>
                </th>
                <th scope="col">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {this.state.product.map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>
                    <img src={data.image} alt="productImage"></img>
                  </td>
                  <td className="title">{data.title}</td>
                  <td>{data.description}</td>
                  <td>{data.quantity}</td>
                  <td>${data.price}</td>
                  <td>
                    <Delete onClick={() => this.deleteProduct(data.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default ProductGrid;
