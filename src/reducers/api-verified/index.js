const init = {
  loading: true,
  error: false,
  errorInfo: '',
  XAuthToken: ''
};

const apiVerified = (state = init, action) => {
  switch (action.type) {
    case 'USER_API_VERIFIED_START':
      return {...state,
        loading: true,
        error: false
      };
    case 'USER_API_VERIFIED_SUCCESS':
      console.log(action.type);
      return {
        ...state,
        loading: false,
        error: false,
        XAuthToken: action.XAuthToken
      };
    case 'USER_API_VERIFIED_ERROR':
      return {
        ...state,
        loading: false,
        error: true
      };
    case 'USER_API_VERIFIED_FAILED':
      console.log(action.type);
      return {
        ...state,
        error: true,
        loading: false
      };
    case 'USER_SIGN_OUT':
      return {
        loading: true,
        error: false,
        errorInfo: '',
        XAuthToken: ''
      };
    default:
      return state;
  }
};

export default apiVerified;
