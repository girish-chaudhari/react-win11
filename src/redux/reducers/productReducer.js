import {
  prodConstants,
  removeSingleProdConstants,
  singleProdConstants,
} from "../constants";

const initState = {
  products: [],
  loading: false,
  pageRequest: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case prodConstants.DATA_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case prodConstants.DATA_SUCCESS:
      return (state = {
        ...state,
        products: action.payload,
        loading: false,
      });

    case prodConstants.DATA_FAILURE:
      return (state = {
        ...state,
        products: [],
        loading: false,
      });
    default:
      return state;
  }
};

export const singleProductView = (state = initState, action) => {
  switch (action.type) {
    case singleProdConstants.DATA_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case singleProdConstants.DATA_SUCCESS:
      return (state = {
        ...state,
        products: action.payload,
        loading: false,
      });

    case singleProdConstants.DATA_FAILURE:
      return (state = {
        ...state,
        products: [],
        loading: false,
      });
    default:
      return state;
  }
};
