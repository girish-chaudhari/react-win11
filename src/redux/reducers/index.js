import { combineReducers } from "redux";
import productReducer, { singleProductView } from "./productReducer";

const rootReducers = combineReducers({
  products: productReducer,
  singleproduct: singleProductView,
});
export default rootReducers;
