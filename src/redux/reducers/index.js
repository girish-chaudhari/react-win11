import { combineReducers } from "redux";
import productReducer, { singleProductView } from "./productReducer";

const rootReducers = combineReducers({
  multProducts: productReducer,
  singleproduct: singleProductView,
});
export default rootReducers;
