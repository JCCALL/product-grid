import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";
import Modal from 'react-bootstrap/Modal';

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTitle: "",
            inputDescription: "",
            inputQuantity: 0,
            inputPrice: 0,
            inputImage: "",
            show: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    closeModal = () => this.setState({ show: false })
    handleShow = () => this.setState({ show: true })

    refreshPage = () => {
        window.location.reload(false);
    }

    handleInputChange(event) {
        const value = event.target.value;

        this.setState({
            [event.target.name]: value
        });
        
    }



    handleSubmit(event) {
        event.preventDefault();
        const data = {
            title: this.state.inputTitle,
            description: this.state.inputDescription,
            quantity: this.state.inputQuantity,
            price: this.state.inputPrice,
            image: this.state.inputImage,
        }
        let show = this.state.show
        API.createProduct(data, show).then((res) => {
            console.log(res);
            this.setState({ show: false })
            this.refreshPage();
        });
        
    }
    
    render() {
        return (
            <div>
                <button type="button" id="create-product" className="btn btn-primary btn-sm" onClick={this.handleShow}>
                   Create
                </button>
                <Modal 
                    show={this.state.show} 
                    onHide={this.closeModal}
                    aria-labelledby="ModalHeader"
                >
                    <Modal.Header className="modal-header" closeButton>
                        <Modal.Title id='ModalHeader'>Add New Product</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={this.handleSubmit}>
                        <Modal.Body className="modal-body">
                            <div className="row mr-1">
                                <div className="col-md-6 form-line">
                                    <div className="form-group">
                                        <label htmlFor="inputTitle">Product Name
                                            <input
                                                type="text"
                                                id="inputTitle"
                                                className="form-control"
                                                name="inputTitle"
                                                placeholder="Enter Title"
                                                value={this.state.inputTitle}
                                                onChange={this.handleInputChange}/>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="inputDescription">Description
                                        <input 
                                            type="text" 
                                            id="inputDescription" 
                                            className="form-control"
                                            name="inputDescription"
                                            placeholder="Enter Description"
                                            value={this.state.inputDescription}
                                            onChange={this.handleInputChange}/></label>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputImage">Image</label>
                                        <br />
                                            <input 
                                                type="text" 
                                                id="inputImage" 
                                                className="form-control"
                                                name="inputImage" 
                                                placeholder="URL" 
                                                value={this.state.inputImage}
                                                onChange={this.handleInputChange}/>

                                        </div>
                                </div>
                                <div className="col-md-6 form-line mb-3">
                                    <div className="form-group">
                                        <div className="col-sm-6 form-padding-right">
                                            <label htmlFor="inputQuantity">Quantity 
                                                <br />
                                                <input
                                                    type="text"
                                                    id="inputQuantity"
                                                    className="form-control"
                                                    name="inputQuantity"
                                                    value={this.state.inputQuantity}
                                                    onChange={this.handleInputChange}/>
                                            </label>
                                            <br />
                                        </div>
                                        <div className="form-group">
                                        <div className="col-sm-6">
                                            <label htmlFor="inputPrice">Price</label>
                                            
                                            <input 
                                                type="text" 
                                                id="inputPrice" 
                                                className="form-control"
                                                name="inputPrice" 
                                                value={this.state.inputPrice}
                                                onChange={this.handleInputChange}/>
                                        </div>
                                        
                                    </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer className="modal-footer">
                            <input onClick={this.handleSubmit} type="submit" value="Submit"/>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        )
    }
}
 
export default Buttons;