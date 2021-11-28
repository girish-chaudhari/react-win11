import { prodConstants } from "../constants";

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
        pageRequest: true,
      };
      break;
    case prodConstants.DATA_SUCCESS:
      state = {
        ...state,
        products: action.payload,
        pageRequest: false,
      };
      break;

    case prodConstants.DATA_FAILURE:
      state = {
        ...state,
        products: action.payload,
        pageRequest: false,
      };
      break;
  }
  return state;
};
