const initStore = {
  logined: false,
  isLogin: false,
  data: '',
  error: false,
  errorMessage: '',
  loading: false,
  signOutError: ''
};

const auth = (state = initStore, action) => {
  switch (action.type) {
    case "LOGINED":
      return {...state,
        logined: true,
        isLogin: true
      };
    case "LOGIN_USER_START":
      console.log( action.type);
      return {...state,
        loading: true,
        isLogin: false,
        error: false,
        errorMessage: ''
      };
    case "LOGIN_USER_SUCCESS":
      return {...state,
        data: action.payload,
        isLogin: true,
        loading: false
      };
    case "LOGIN_USER_FAILED":
      console.log( action.type);
      return {...state,
        error: true,
        loading: false,
        errorMessage: action.payload
      };
    case "USER_SIGN_OUT":
      return {...state,
        data: '',
        isLogin: false
      };
    case "USER_SIGN_OUT_FAILED":
      return {...state,
        signOutError: action.error};

    default:
      return state
  }
};

export default auth;
