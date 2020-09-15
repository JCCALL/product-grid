import React from "react";
import "./style.css";


function Delete(props) {

        return (
                <span id="delete-product" {...props} role="button" tabIndex="0" className="btn btn-danger btn-sm">
                    X
                </span>
            

        );

}

export default Delete;