import axios from "../../config";
import { prodConstants } from "../constants";

export const productsView = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: prodConstants.DATA_REQUEST,
      });
      let res = await axios.get("/products");
      console.log("this is first response", res);
      const data = res.data;
      dispatch({ type: prodConstants.DATA_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: prodConstants.DATA_FAILURE });
    }
  };
};
