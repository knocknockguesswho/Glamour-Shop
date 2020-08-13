const initialState = {
  isLoading: false,
  isLoggedIn: false,
  isError: false,
  errorMsg: null,
  data: {},
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_PRODUCTS_PENDING':
      return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
        isError: false,
      };
    case 'GET_ALL_PRODUCTS_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data.data,
      };
    case 'GET_ALL_PRODUCTS_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        data: action.payload.data.data,
      };
    default:
      return state;
  }
};

export default products;
