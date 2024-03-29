import { getProducts, getProductsSuccess, getProductsError, addProduct, deleteProduct, updateProduct } from "../slices/productSlice";
import axios from "axios";


// get all products
export const fetchProducts = () => async dispatch => {
    try {
        dispatch(getProducts());
        const response = await axios.get(`${process.env.REACT_APP_API_URI}/products`);
        if (response.status !== 200) {
            throw new Error("Error fetching products");
        }
        dispatch(getProductsSuccess(response.data));
    } catch (error) {
        dispatch(getProductsError(error.message));
    }
};

// create a new product
export const createProduct = product => async dispatch => {
    try {

        const response = await axios.post(`${process.env.REACT_APP_API_URI}/products`, product, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        });
        if (response.status !== 201) {
            throw new Error("Something went wrong");
        }
        dispatch(addProduct(product));
    } catch (error) {
        alert(error.response.data.errors);
    }
};

// delete a product
export const removeProduct = product => async dispatch => {
    try {
        const response = await axios.delete(`${process.env.REACT_APP_API_URI}/products/${product._id}`);
        if (response.status !== 200) {
            throw new Error("Error deleting product");
        }
        dispatch(deleteProduct(product._id));
    } catch (error) {
        alert(error.response.data.errors);
    }
};

// update a product
export const editProduct = product => async dispatch => {
    try {
        const response = await axios.put(`${process.env.REACT_APP_API_URI}/products/${product._id}`, product, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        });
        if (response.status !== 200) {
            throw new Error("Something went wrong");
        }
        dispatch(updateProduct(product));
    } catch (error) {
        alert(error.response.data.errors);
    }
};
