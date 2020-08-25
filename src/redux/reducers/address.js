const inialState = {
  data: {},
  errorMessage: null,
  isLoading: false,
};

const address = (state = inialState, action) => {
  switch (action.type) {
    case 'GET_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_REJECTED': {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.response.data.data,
      };
    }
    case 'GET_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        data: action.payload.data.data,
      };
    }

    default: {
      return state;
    }
  }
};

export default address;
