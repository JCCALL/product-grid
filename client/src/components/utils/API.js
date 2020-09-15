import axios from "axios";

export default {
  // Gets all products
  getProducts: function() {
    return axios.get("/api/products/");
  },
  
  // create 
  createProduct: function(body) {
    return axios.post("/api/products/new", body);
  },
  
  // updates
  changeProduct: function(id) {
    return axios.put("/api/products/" + id);
  },
  
  //delete
  deleteProduct: function(id) {
    return axios.delete("/api/products/" + id);
  },
};
