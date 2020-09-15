import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";
import Buttons from "../Buttons/index";
import Delete from "../Delete/index";

class ProductGrid extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            product: []
        };
    }

    componentDidMount() {
        API.getProducts().then((res) => {
            const products = res.data.map((data) => ({
                image: data.image,
                title: data.title,
                description: data.description,
                quantity: data.quantity,
                price: data.price,
                id: data.id
            }));
            console.log(products);
            this.setState({
                product: products
            });
        });
    }    

    render() {
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
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th> 
                <th scope="col">Image</th>
                <th scope="col">Product Name</th>
                <th scope="col">Description</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">DELETE</th>
              </tr>
            </thead>
            <tbody>
                {this.state.product.map(data => 
                    <tr>
                        <td>
                            { data.id }
                        </td>
                        <td>
                            <img src={ data.image } alt="productImage"></img>
                        </td>
                        <td className="title">
                            { data.title }
                        </td>
                        <td>
                            { data.description }
                        </td>
                        <td>
                            { data.quantity }
                        </td>
                        <td>
                            ${ data.price } 
                        </td>
                        <td>
                            <Delete />
                        </td>
                    </tr>
                    


                )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductGrid;
