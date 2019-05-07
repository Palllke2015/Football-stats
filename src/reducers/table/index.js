const initState = {
  loading: true,
  data: null,
  error: false,
  errorMessage: ''
};

const table = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_TABLE_START':
      return {...state,
        loading: true,
        error: false,
        errorMessage: ''};

    case 'FETCH_TABLE_SUCCESS':
      return {...state,
        data: action.payload,
        loading: false};
    case 'FETCH_TABLE_ERROR':
      return {...state,
        loading: false,
        error: true,
        errorMessage: action.error
      };
    case 'USER_SIGN_OUT':
      return {
        loading: true,
        data: null,
        error: false,
        errorMessage: ''
      };

    default:
      return state;
  }
};
export default table;
