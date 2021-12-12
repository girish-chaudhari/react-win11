import { prodConstants, singleProdConstants } from "../constants";

const initState = {
  products: [],
  loading: false,
  pageRequest: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case prodConstants.DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case prodConstants.DATA_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case prodConstants.DATA_FAILURE:
      return {
        ...state,
        products: [],
        loading: false,
      };
    case prodConstants.REMOVE_ALL_PRODUCTS:
      return {
        ...state,
        products: [],
        loading: false,
      };
    default:
      return state;
  }
};

export const singleProductView = (state = initState, action) => {
  switch (action.type) {
    case singleProdConstants.SINGLE_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case singleProdConstants.SINGLE_DATA_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case singleProdConstants.SINGLE_DATA_FAILURE:
      return {
        ...state,
        products: [],
        loading: false,
      };
    case singleProdConstants.REMOVE_SINGLE_DATA:
      return {
        ...state,
        products: [],
        loading: false,
      };
    default:
      return state;
  }
};
