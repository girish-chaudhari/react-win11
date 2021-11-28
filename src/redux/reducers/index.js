import { combineReducers } from "redux";
import productReducer from "./productReducer";

const rootReducers = combineReducers({
  products: productReducer,
});
export default rootReducers;
