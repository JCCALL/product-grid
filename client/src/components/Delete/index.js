import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";
import Modal from "react-bootstrap/Modal";

class Delete extends Component{

    render() {
        return (
            <div className="absolute-center">
                <button type="button" id="delete-product" className="btn btn-danger">
                    X
                </button>
            </div>
        )
    }

}

export default Delete;