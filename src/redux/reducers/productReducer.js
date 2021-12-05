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
      state = {
        ...state,
        loading: true,
      };
      break;
    case prodConstants.DATA_SUCCESS:
      state = {
        ...state,
        products: action.payload,
        loading: false,
      };
      break;

    case prodConstants.DATA_FAILURE:
      state = {
        ...state,
        products: action,
        loading: false,
      };
      break;
  }
  return state;
};

export const singleProductView = (state = initState, action) => {
  switch (action.type) {
    case singleProdConstants.DATA_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case singleProdConstants.DATA_SUCCESS:
      state = {
        ...state,
        products: action.payload,
        loading: false,
      };
      break;

    case singleProdConstants.DATA_FAILURE:
      state = {
        ...state,
        products: action,
        loading: false,
      };
      break;
  }
  return state;
};
export const removerSingleProductView = (state = initState, action) => {
  switch (action.type) {
    case removeSingleProdConstants.DATA_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case removeSingleProdConstants.DATA_SUCCESS:
      state = {
        ...state,
        products: action.payload,
        loading: false,
      };
      break;

    case singleProdConstants.DATA_FAILURE:
      state = {
        ...state,
        products: action,
        loading: false,
      };
      break;
  }
  return state;
};
