import axios from "../../config";
import { prodConstants, singleProdConstants } from "../constants";

export const productsView = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: prodConstants.DATA_REQUEST,
      });
      let res = await axios.get("/products");
      const { data } = res;
      dispatch({ type: prodConstants.DATA_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: prodConstants.DATA_FAILURE });
    }
  };
};

export const removeAllProducts = () => {
  return async (dispatch) => {
    dispatch({ type: prodConstants.REMOVE_ALL_PRODUCTS });
  };
};

export const singleView = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: singleProdConstants.SINGLE_DATA_REQUEST,
      });
      let res = await axios.get(`/products/${id}`);
      const data = res.data;
      dispatch({
        type: singleProdConstants.SINGLE_DATA_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({ type: singleProdConstants.SINGLE_DATA_FAILURE });
    }
  };
};
export const removeProducts = () => {
  return async (dispatch) => {
    dispatch({ type: singleProdConstants.REMOVE_SINGLE_DATA });
  };
};
