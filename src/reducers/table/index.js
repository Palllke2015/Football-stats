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
        loading: true};

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
    default:
      return state
  }
};
export default table;
